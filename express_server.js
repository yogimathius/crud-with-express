///////////////////////////////////////////////////////////////////
/// Configuration
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 8080;

app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
///////////////////////////////////////////////////////////////////
/// Database
const movieDatabase = {
  ClockworkOrange: {
    title: "Clockwork Orange",
    year: 1971,
  },
  ScottPilgrim: {
    title: "Scot Pilgrim",
    year: 2010,
  },
  PulpFiction: {
    title: "pulp fiction",
    year: 1994,
  },
  BlackPanther: {
    title: "Black Panther",
    year: 2018,
  },
  MadMax: {
    title: "Mad Max Fury Road",
    year: 2015,
  },
  TheBatman: {
    title: "The Batman",
    year: 2022,
  },
  CitizenKane: {
    title: "Citizen Kane",
    year: 1941,
  },
};

///////////////////////////////////////////////////////////////////
/// Routes
app.get("/", (req, res) => {
  console.log("root url is being loaded");
  res.status(200).send("Hello World");
});

// CREATE ROUTES

app.get("/movies/new", (req, res) => {
  res.render("movies/new");
});

app.post("/movies", (req, res) => {
  const { key, title, year } = req.body;
  movieDatabase[key] = {
    title,
    year,
  };
  res.redirect(`/movies/${key}`);
});

// READ ROUTES
app.get("/movies", (req, res) => {
  const templateVariables = {
    movieDatabase,
  };

  res.render("movies/index", templateVariables);
});

app.get("/movies/:movieKey", (req, res) => {
  const { movieKey } = req.params;
  const movie = movieDatabase[movieKey];
  const templateVariables = {
    movie,
    movieKey,
  };
  res.render("movies/show", templateVariables);
});

// UPDATE ROUTES

app.get("/movies/:movieKey/edit", (req, res) => {
  const { movieKey } = req.params;
  const movie = movieDatabase[movieKey];
  const templateVariables = {
    movie,
    movieKey,
  };

  res.render("movies/edit", templateVariables);
});

app.post("/movies/:movieKey", (req, res) => {
  const { movieKey } = req.params;

  const { title, year } = req.body;
  movieDatabase[movieKey] = {
    title,
    year,
  };
  console.log(movieKey);
  res.redirect(`/movies/${movieKey}`);
});

// DELETE ROUTE
app.post("/movies/:movieKey/delete", (req, res) => {
  const { movieKey } = req.params;

  delete movieDatabase[movieKey];
  res.redirect("/movies");
});

///////////////////////////////////////////////////////////////////
/// Listener
app.listen(port, () => {
  console.log(`movies app listening on port ${port}`);
});
