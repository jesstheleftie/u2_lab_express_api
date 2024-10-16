const express = require("express");
const cors = require("cors");
const { Actor, Movie, Review } = require("./models");
const moviesController = require("./controllers/moviesController");
const reviewsController = require("./controllers/reviewsController");
const actorController = require("./controllers/actorController");
const everythingController = require("./controllers/everythingController");

const PORT = process.env.PORT || 3003;
const db = require("./db");
const actorSchema = require("./models/actor");
const { findMovieDetailById } = require("./controllers/everythingController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is root!");
});
//Movies Route
app.get("/movies/:id", moviesController.findMovieDetailById);
app.get("/movies/sort", moviesController.getSortedMoviesByDate);
app.get("/movies", moviesController.getAllMovie);

//Actors Route
app.get("/actors/:id", actorController.findActorDetailById);
app.get("/actors", actorController.getAllActors);

//Reviews Route
app.get("/reviews/sort", reviewsController.getSortedReviewsByScore);
app.get("/reviews/:id", reviewsController.findReviewDetailById);
app.get("/reviews", reviewsController.getAllReviews);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
