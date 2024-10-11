const express = require("express");
const cors = require("cors");
const { Actor, Movie, Review } = require("./models");
const {getSortedMoviesByDate} = require("./controllers/moviesController")
const { getSortedReviewsByScore } = require("./controllers/reviewsController");
const PORT = process.env.PORT || 3001;
const db = require("./db");
const actorSchema = require("./models/actor");
const { findMovieDetailById } = require("./controllers/everythingController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is root!");
});
//find movie detail by ID and throw error if nothing found
app.get("/details/:id", findMovieDetailById)
//index route for Actors
app.get("/actors", async (req, res) => {
  const actors = await Actor.find({});
  res.json(actors);
});
//route for sorting movie by date released
app.get("/movies/sort", getSortedMoviesByDate);

//index route for Movies
app.get("/movies", async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

//route for sorting by review score
app.get("/reviews/sort", getSortedReviewsByScore);

//index route for Reviews
app.get("/reviews", async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
