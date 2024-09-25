const router = require("express").Router();
const axios = require("axios");
const XI_API_KEY = process.env.XI_API_KEY;
const { ElevenLabsClient } = require('elevenlabs');

if(!XI_API_KEY) {
  console.error("No se ha encontrado la variable de entorno XI_API_KEY");
  process.exit(1);
}

const client = new ElevenLabsClient({
    apiKey: XI_API_KEY,
  });

router.post("/get-audio", (req, res, next) => {
  const { text } = req.body;
  console.log("Texto recibido: ", text);
  

  client
    .generate({
      voice: "Alice",
      model_id: "eleven_multilingual_v2",
      text: text,
    })
    .then(async (audioStream) => {
      const chunks = [];

      for await (const chunk of audioStream) {
        chunks.push(Buffer.from(chunk));
      }

      const content = Buffer.concat(chunks);
      const audioBase64 = content.toString("base64");
      res.json({ audioContent: audioBase64 });
    })
    .catch((error) => {
      console.error(
        "Error on errorLabs request:",
        error.response ? error.response.data : error.message
      );
      res.status(500).json({ error: "Error al obtener el audio" });
    });
});

module.exports = router;
