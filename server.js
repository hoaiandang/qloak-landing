const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const url = require('url');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;


const app = express();

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(...)
