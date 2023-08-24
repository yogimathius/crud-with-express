const express = require("express");
const router = express.Router();
const { movieDatabase } = require("../db/movies");

// READ ROUTES
router.get("/", (req, res) => {
  console.log(movieDatabase);
  const templateVariables = {
    movieDatabase,
  };

  res.render("movies/index", templateVariables);
});

router.get("/new", (req, res) => {
  res.render("movies/new");
});

router.get("/:movieKey", (req, res) => {
  const { movieKey } = req.params;
  const movie = movieDatabase[movieKey];
  const templateVariables = {
    movie,
    movieKey,
  };
  res.render("movies/show", templateVariables);
});

router.get("/:movieKey/edit", (req, res) => {
  const { movieKey } = req.params;
  const movie = movieDatabase[movieKey];
  const templateVariables = {
    movie,
    movieKey,
  };

  res.render("movies/edit", templateVariables);
});

module.exports = router;
