const router = require("express").Router();
const Question = require("../models/Question.model");
const Challenge = require("../models/Challenge.model");
const Trueties = require("../models/Trueties.model");

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
  Challenge.find(category === "spicy" ? {} : { category })
    .then((challenges) => {
      res.json(challenges);
    })
    .catch((err) => {
      next(err);
    });
});


router.get("/trueties", (req, res, next) => {
  Trueties.find({})
    .then((trueties) => {
      res.json(trueties);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
