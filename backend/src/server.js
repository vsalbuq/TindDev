const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${
    process.env.MONGO_PASS
  }@cluster0-clgs7.mongodb.net/tindev?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
