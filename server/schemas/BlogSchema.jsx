const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({

    // Blog values
    place: { type: String, required: true },
    coordinates: { type: String, required: true },
    date: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number },

    // Picture information
    camera: { type: String, required: false },
    lens: { type: String, required: false },
    shutter_speed: { type: String, required: false },
    iso: { type: String, required: false },
    exposure_compensation: { type: String, required: false },

    // Image urls from an external file server
    picture_url: { type: String },
    stamp_url: { type: String }
});

module.exports = BlogSchema;