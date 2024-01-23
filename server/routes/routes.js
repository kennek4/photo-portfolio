require("dotenv").config();

const express = require("express");
const router = express.Router();

const mongooseFunctions = require("../mongooseFunctions.js");

router.get("/", (req, res) => {
    res.send({ "body": "server page" })
});

// get all blogs
router.get("/blogs", (req, res) => {
    res.send({ 0: "Imagine all the blogs here" });
});

// get one blog by ID
router.get("/blog/:blogID", (req, res) => {
    res.send({ 0: "Imagine a single block" });
});

router.post("/upload", async (req, res) => {
    await mongooseFunctions.createBlogPost(req);
    res.sendStatus(200);
});


module.exports = router;
