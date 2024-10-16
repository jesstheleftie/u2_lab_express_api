


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


module.exports = {
  getSortedReviewsByScore,
  getAllReviews
};
