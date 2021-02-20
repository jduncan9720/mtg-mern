const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    artist_painter: { type: Boolean, required: false},
    artist_sculptor: { type: Boolean, required: false},
    artist_other: { type: Boolean, required: false},
    featured_image: { type: String, required: false},
    artwork:[
        {
        type: { type: String, required: false},
        title: { type: String, required: false},
        width: { type: Number, required: false},
        length: { type: Number, required: false},
        depth: { type: Number, required: false},
        image: { type: String, required: false},
        media: { type: String, required: false},
        price: { type: Number, required: false},
        newRelease: { type: Boolean, required: false}
        }   
]
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist