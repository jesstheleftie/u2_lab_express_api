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

const getAllMovie = async(req,res)=>{
  try{
const movies = await Movie.find()
res.json(movies)
  }catch(error){
    return res.status(500).send(error.message)
  }
}

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
  getSortedMoviesByDate,
  getAllMovie,
  findMovieDetailById
};
