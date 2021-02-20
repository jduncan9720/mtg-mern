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
    artwork: [
      {
        type: "painting",
        title: "Mountain Home",
        width: 24,
        length: 24,
        depth: 0,
        image: "/images/Mountain-Home.jpg",
        media: "Oil",
        price: 6000,
        newRelease: "false"
      },
      {
        type: "painting",
        title: "Mountain Cabin",
        width: 20,
        length: 26,
        depth: 0,
        image: "/images/Mountain-Home.jpg",
        media: "Oil",
        price: 9000,
        newRelease: "false"
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
    artwork: [
      {
        type: "sculpture",
        title: "Moose",
        width: 12,
        length: 24,
        depth: 10,
        image: "/images/Moose.jpg",
        media: "Bronze",
        price: 3800,
        newRelease: "true"
      },
      {
        type: "painting",
        title: "Showoffs",
        width: 24,
        plength: 36,
        depth: 0,
        image: "/images/Showoffs.jpg",
        media: "Oil",
        price: 5000,
        newRelease: "false"
      }
    ]
  },
  {
    first_name: "Bryce",
    last_name: "Pettit",
    artist_painter: false,
    artist_sculptor: true,
    artist_other: false,
    featured_image: "/images/Critical-Angle.jpg",
    artwork: [
      {
        type: "sculpture",
        title: "Critical Angle",
        width: 20,
        length: 36,
        depth: 12,
        image: "/images/Critical-Angle.jpg",
        media: "Bronze",
        price: "15000",
        newRelease: "true"
      }
    ]
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