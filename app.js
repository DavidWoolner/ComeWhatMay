const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const disasterPlans = require("./routes/api/disaster_plans")

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/users", users);
app.use("/api/disaster_plans", disasterPlans)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
