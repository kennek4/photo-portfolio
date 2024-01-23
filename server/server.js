const express = require("express");
const cors = require("cors");

const routes = require("./routes/routes");
const mongooseFunctions = require("./mongooseFunctions")
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());


app.use("/api", routes);

app.listen(3001, () => {
    console.log("Listening to port 3001!");
    mongooseFunctions.connection()
        .then(
            () => {
                console.log("Connected to database successfully!")
            },
            (rejected) => {
                console.log(rejected);
            }).catch(err => console.log(err.reason));

});
