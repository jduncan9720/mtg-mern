const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mtg-mern"
);

const artistSeed = [
  {
    first_name: "Troy",
    last_name: "Collins",
    artist_painter: true,
    artist_sculptor: false,
    artist_other: false,
    featured_image: "/images/Mountain-Home.jpg",
    painting: [
      {
        title: "Mountain Home",
        painting_width: 24,
        painting_length: 24,
        painting_img: "/images/Mountain-Home.jpg",
        media: "Oil",
        price: 6000,
      },
      {
        title: "Mountain Valley",
        painting_width: 24,
        painting_length: 24,
        painting_img: "/images/Mountain-Home.jpg",
        media: "Oil",
        price: 6000,
      },
    ],
    sculpture: [
      {
        title: null,
        sculpture_width: null,
        sculpture_length: null,
        sculpture_depth: null,
        sculpture_img: null,
        media: null,
        price: null,
      }
    ]
  },
  {
    first_name: "Simon",
    last_name: "Winegar",
    artist_painter: true,
    artist_sculptor: true,
    artist_other: false,
    featured_image: "/images/Showoffs.jpg",
    painting: [{
      title: "Showoffs",
      painting_width: 24,
      painting_length: 36,
      painting_img: "/images/Showoffs.jpg",
      media: "Oil",
      price: 5000,
    }
    ],
    sculpture: [{
      title: "Moose",
      sculpture_width: 12,
      sculpture_length: 24,
      sculpture_depth: 10,
      sculpture_img: "/images/Moose.jpg",
      media: "Bronze",
      price: "3800",
    }]
  },
  {
    first_name: "Bryce",
    last_name: "Pettit",
    artist_painter: false,
    artist_sculptor: true,
    artist_other: false,
    featured_image: "/images/Critical-Angle.jpg",
    painting: [{
      title: null,
      painting_width: null,
      painting_length: null,
      painting_img: null,
      media: null,
      price: null,
    }],
    sculpture: [{
      title: "Critical Angle",
      sculpture_width: 20,
      sculpture_length: 36,
      sculpture_depth: 12,
      sculpture_img: "/images/Critical-Angle.jpg",
      media: "Bronze",
      price: "15000",
    }]
  }
];

db.Artist
  .remove({})
  .then(() => db.Artist.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });