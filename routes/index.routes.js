const router = require("express").Router();
const Question = require("../models/Question.model");
const Challenge = require("../models/Challenge.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/questions", (req, res, next) => {
  const category = req.query.category;
  Question.find({ category })
    .then((questions) => {
      res.json(questions);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/challenges", (req, res, next) => {
  const category = req.query.category;
  Challenge.find({ category })
    .then((challenges) => {
      res.json(challenges);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
