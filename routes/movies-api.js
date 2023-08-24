const express = require("express");
const router = express.Router();
const { movieDatabase } = require("../db/movies");

router.post("/", (req, res) => {
  const { key, title, year } = req.body;
  movieDatabase[key] = {
    title,
    year,
  };
  res.redirect(`/movies/${key}`);
});

router.post("/:movieKey", (req, res) => {
  const { movieKey } = req.params;

  const { title, year } = req.body;
  movieDatabase[movieKey] = {
    title,
    year,
  };
  console.log(movieKey);
  res.redirect(`/movies/${movieKey}`);
});

router.post("/:movieKey/delete", (req, res) => {
  const { movieKey } = req.params;

  delete movieDatabase[movieKey];
  res.redirect("/movies");
});

module.exports = router;
