const mongoose = require("mongoose");
const Blog = require("./models/BlogModel.jsx");
const databaseURI = process.env.DATABASE_URI;

/**
 * A function that returns the connection state of mongoose
 * @returns mongoose.connect.readyState
 */
async function checkConnection() {
    return mongoose.connection.readyState
}

/**
 * Connects mongoose to the MongoDB database
 */
async function connectToDatabase() {
    await mongoose.connect(databaseURI, {
        serverSelectionTimeoutMS: 10000
    });
};

/**
 * This function creates a Blog document and saves 
 * it to the respective database and collection 
 * 
 * @param {*} req The POST request body 
 */
async function createBlogPost(req) {

    const formBody = req.body;
    const blog = new Blog();

    blog.place = formBody.place;
    blog.coordinates = formBody.coordinates;
    blog.date = formBody.date;
    blog.content = formBody.content;
    blog.likes = 0;

    await blog.save();
}

module.exports = {
    createBlogPost: createBlogPost,
    checkConnection: checkConnection,
    connection: connectToDatabase
};

