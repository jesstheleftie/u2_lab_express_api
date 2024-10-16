
const { Review } = require("../models");

const getSortedReviewsByScore = async (req, res) => {
  try {
    const sortOrder = req.query.order === "desc" ? "desc" : "asc";
    const reviews = await Review.find({});
    let sorted = reviews.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.score - b.score;
      } else {
        return b.score - a.score;
      }
    });
    res.json(sorted);
  } catch (error) {
    res.send("Error Fetching Sorted Reviews");
  }
};
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    return res.status(500).send(error.message);
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

module.exports = {
  getSortedReviewsByScore,
  getAllReviews,
  findReviewDetailById
};
