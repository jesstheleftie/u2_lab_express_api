const db = require("../db");

const { Actor, Movie, Review } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const actors = [
    {
      name: "Jennifer Aniston",
      age: 55,
      alive: true,
    },
    {
      name: "Ryan Gosling",
      age: 43,
      alive: true,
    },
    {
      name: "Emma Watson",
      age: 34,
      alive: true,
    },
    {
      name: "Timothee Chalemet",
      age: 28,
      alive: true,
    },
    {
      name: "Zendaya Coleman",
      age: 28,
      alive: true,
    },

  ];

  const insertedActors = await Actor.insertMany(actors)
  console.log('actors!')

  const movies =[
      {
          title: "Friends Reunion",
          runtime: 120,
          rating: 9.0,
          yearReleased: 2021,
          description: "A nostalgic reunion of the Friends cast.",
          actors: insertedActors[0]._id
        },
        {
          title: "Drive",
          runtime: 100,
          rating: 7.8,
          yearReleased: 2011,
          description: "A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver.",
          actors: insertedActors[1]._id
        },
        {
          title: "Harry Potter and the Philosopher's Stone",
          runtime: 152,
          rating: 7.6,
          yearReleased: 2001,
          description: "A young wizard discovers his magical heritage.",
          actors: insertedActors[2]._id
        },
        {
          title: "Dune",
          runtime: 155,
          rating: 8.2,
          yearReleased: 2021,
          description: "A brilliant young man must travel to a dangerous planet to save his family.",
          actors: insertedActors[3]._id
        },
        {
          title: "Euphoria",
          runtime: 55,
          rating: 8.4,
          yearReleased: 2019,
          description: "A group of high school students navigate love and friendship in a world of social media.",
          actors: insertedActors[4]._id
        },
        {
          title: "The Break-Up",
          runtime: 106,
          rating: 5.8,
          yearReleased: 2006,
          description: "A couple's break-up leads to a comedic battle for control of their shared condo.",
          actors: insertedActors[0]._id // Jennifer Aniston
        },
        {
          title: "The Nice Guys",
          runtime: 116,
          rating: 7.4,
          yearReleased: 2016,
          description: "A private eye and a tough enforcer team up to solve a missing person's case in 1970s Los Angeles.",
          actors: insertedActors[1]._id // Ryan Gosling
        },
        {
          title: "The Circle",
          runtime: 110,
          rating: 5.3,
          yearReleased: 2017,
          description: "A young woman rises through the ranks of a powerful tech company but soon uncovers its dark side.",
          actors: insertedActors[2]._id // Emma Watson
        },
        {
          title: "Lady Bird",
          runtime: 94,
          rating: 7.4,
          yearReleased: 2017,
          description: "An artistically inclined seventeen-year-old comes of age in Sacramento, California.",
          actors: insertedActors[3]._id // Timothée Chalamet
        },
        {
          title: "Malcolm & Marie",
          runtime: 106,
          rating: 6.7,
          yearReleased: 2021,
          description: "A filmmaker and his girlfriend return home from a movie premiere and face relationship challenges.",
          actors: insertedActors[4]._id // Zendaya
        }
       
  ]
  const insertedMovies = await Movie.insertMany(movies)
  console.log('movies!')

  const foundMovies = await Movie.find({});

  const reviews = [
    {
      movie_id: foundMovies[0]._id,
      score: 5,
      comment:
        "The reunion we've been waiting for! A nostalgic and heartwarming event.",
    },
    {
      movie_id: foundMovies[0]._id,
      score: 4,
      comment:
        "Loved seeing the cast back together, but I expected more behind-the-scenes footage.",
    },
    {
      movie_id: foundMovies[1]._id,
      score: 4,
      comment:
        "Stylish and thrilling, with an excellent performance by Ryan Gosling.",
    },
    {
      movie_id: foundMovies[1]._id,
      score: 3,
      comment: "A good film, but I felt the pacing was a little slow in parts.",
    },
    {
      movie_id: foundMovies[2]._id,
      score: 5,
      comment: "A magical introduction to a beloved series.",
    },
    {
      movie_id: foundMovies[2]._id,
      score: 4,
      comment: "Great family movie, but the CGI hasn't aged as well.",
    },
    {
      movie_id: foundMovies[3]._id,
      score: 4,
      comment:
        "Visually stunning, but the story can be hard to follow if you're unfamiliar with the source material.",
    },
    {
      movie_id: foundMovies[3]._id,
      score: 5,
      comment: "An epic sci-fi adventure that stays true to the novel!",
    },
    {
      movie_id: foundMovies[4]._id,
      score: 5,
      comment:
        "Zendaya delivers a powerful performance in a raw and emotional series.",
    },
  ];
  await Review.insertMany(reviews);
  console.log("Reviews!");
};
const run = async () => {
  await main();
  db.close();
};
run();
