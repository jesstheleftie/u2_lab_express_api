const express = require("express");
const cors = require("cors");
const { Actor, Movie, Review } = require("./models");
const  moviesController = require("./controllers/moviesController");
const reviewsController = require("./controllers/reviewsController");
const actorController = require("./controllers/actorController")

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
app.get("/movies/sort", moviesController.getSortedMoviesByDate);
app.get("/movies", moviesController.getAllMovie )

//Actors Route
app.get("/actors", actorController.getAllActors)


//Reviews Route
app.get('/reviews', reviewsController.getAllReviews)
app.get("/reviews/sort", reviewsController.getSortedReviewsByScore);




app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
