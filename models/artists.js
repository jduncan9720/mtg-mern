const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: Number, required: false},
    email: { type: String, required: false},
    artist_painter: { type: Boolean, required: false},
    artist_sculptor: { type: Boolean, required: false},
    artist_other: { type: Boolean, required: false},
    featured_image: { type: String, required: false},
    painting:{
        title: { type: String, required: false},
        painting_width: { type: Number, required: false},
        painting_length: { type: Number, required: false},
        painting_img: { type: String, required: false},
        media: { type: String, required: false},
        price: { type: Number, required: false},
    },
    sculpture:{
        title: { type: String, required: false},
        sculpture_width: { type: Number, required: false},
        sculpture_length: { type: Number, required: false},
        sculpture_depth: { type: Number, required: false},
        sculpture_img: { type: String, required: false},
        media: { type: String, required: false},
        price: { type: Number, required: false},
    }
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist