const { Review, Movie, Actor } = require("../models");

// const findMovieDetailById = async (req, res) => {
//   const id = req.params.id;
//   try {
//     let returnObject = {};
//     let foundReview = await Review.findById(id);
//     if (foundReview) {
//       returnObject = foundReview;
//     } else if (!foundReview) {
//       let foundMovie = await Movie.findById(id);
//       if (foundMovie) {
//         returnObject = foundMovie;
//       } else {
//         let foundActor = await Actor.findById(id);
//         if (foundActor) {
//           returnObject = foundActor;
//         }
//       }
//     }
//     res.json(returnObject);
//   } catch (error) {
//     res.send("Error finding Movie Detail");
//   }
// };

const findActorDetailById = async (req, res) => {
  const id = req.params.id;
  try {
    let foundActor = await Actor.findById(id);
    res.json(foundActor);
  } catch (error) {
    res.send("Error finding Movie Detail");
  }
};

const findReviewDetailById = async (req, res) => {
  const id = req.params.id;
  try {
    let foundReview = await Review.findById(id);
    res.json(foundReview);
  } catch (error) {
    res.send("Error finding Movie Detail");
  }
};

const findMovieDetailById = async (req, res) => {
  const id = req.params.id;
  try {
    let foundMovie = await Movie.findById(id);
    res.json(foundMovie);
  } catch (error) {
    res.send("Error finding Movie Detail");
  }
};

module.exports = {
  findMovieDetailById,
  findActorDetailById,
  findReviewDetailById
};
