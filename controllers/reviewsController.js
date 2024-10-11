


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

module.exports = {
  getSortedReviewsByScore,
};
