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
        phone: "4356570500",
        email: "troy@troycollins.com",
        painting: {
            title: "Aspens",
            painting_width: 30,
            painting_length: 40,
            painting_img: "",
            media: "Oil",
            price: 5000,
        },
        sculpture: {
            title: "",
            sculpture_width: null,
            sculpture_length: null,
            sculpture_img: "",
            media: "",
            price: null,
        }
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