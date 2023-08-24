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
/// Routes
const movieRoutes = require("./routes/movies");
const movieApiRoutes = require("./routes/movies-api");

app.get("/", (req, res) => {
  console.log("root url is being loaded");
  res.status(200).send("Hello World");
});

// CREATE ROUTES

// VIEW MOVIE PAGES (LIST, INDIVIDUAL, NEW, EDIT)
app.use("/movies", movieRoutes);

// CRUD ROUTES
app.use("/api/movies", movieApiRoutes);

///////////////////////////////////////////////////////////////////
/// Listener
app.listen(port, () => {
  console.log(`movies app listening on port ${port}`);
});
