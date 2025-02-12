const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apps = express();
apps.use(
  cors({
    origin: [
      "http://192.168.0.213:3000",
      "http://192.168.0.213:3002",
      "http://localhost:3001",
      "http://localhost:3000",
      "http://localhost:3002",
      "http://192.168.0.240:3000",
    ],
  })
);
// Use bodyParser.json() to set the JSON payload limit
apps.use(bodyParser.json({ limit: "50mb" }));

// Use bodyParser.urlencoded() to set the URL-encoded payload limit
apps.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
apps.use(express.static("public"));

module.exports = apps;
