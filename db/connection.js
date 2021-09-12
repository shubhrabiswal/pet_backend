const mongoose = require("mongoose");
const path = require("path");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });

const dotenv = require("dotenv");
dotenv.config();

const Db = process.env.DATABASE;
mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database is not connected", err);
  });