require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const audioRoutes = require("./routes/audio.routes");
app.use("/api", audioRoutes);

require("./error-handling")(app);

module.exports = app;
