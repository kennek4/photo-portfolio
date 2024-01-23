const mongoose = require("mongoose");
const BlogSchema = require("../schemas/BlogSchema.jsx");
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;