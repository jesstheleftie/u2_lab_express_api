const { Movie } = require("../models");

const getSortedMoviesByDate = async (req, res) => {
  try {
    const sortOrder = req.query.order === "desc" ? "desc" : "asc";
    const movies = await Movie.find({});
    let sorted = movies.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.yearReleased - b.yearReleased;
      } else {
        return b.yearReleased - a.yearRerleased;
      }
    });
    console.log("sorted", sorted);
    res.json(sorted);
  } catch (error) {
    res.send("Error Fetching Sorted Movies By Date");
  }
};

module.exports = {
  getSortedMoviesByDate,
};
