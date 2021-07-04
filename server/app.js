//node server
const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";
const cors = require('cors');
const router = require('./lib/api');

app.use(cors());

app.use('/api', router);

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Chinook database viewer");
});

app.use((req, res, next) => {
    const error = new Error("Could not find this route.");
    res.status(404).json({error: error.message});
});

app.use((err, req, res, next) => {
    if (res.headerSent) {
        return next(err);
    }
    res.status(500).json({err: err.message});
});

app.listen(port, () => {
    console.log(`Example app listening at http://${host}:${port}` );
});