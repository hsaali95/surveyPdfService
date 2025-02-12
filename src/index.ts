require("dotenv").config(); // Load environment variables
const app = require("./config/express");
const http = require("http");
const { serverStartLog } = require("./helper/response.decorator");

app.use("/api/v1", require("../src/api/routes"));


const server = http.createServer(app);
const PORT = parseInt(config.PORT || "3000");

//handle any uncaught exceptions preventing the server from crashing
process.on("uncaughtException", function (err) {
  console.log("Caught exception: " + err);
});

server.listen(PORT, () => serverStartLog(PORT));
