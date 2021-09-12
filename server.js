const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
var cors = require("cors");
const doctorRoutes = require("./router/aut.route");
const userRoutes = require("./router/userAuth.route");
const appointmentRoutes = require("./router/appointment.route");
const Drcategory = require("./router/DrCategoryRoute");
const adminRoutes = require("./router/adminRoute");
const hospitalRoutes = require("./router/hospitalRoute");
const donateRoutes = require("./router/donateRoute");
const issueRoutes = require("./router/issueRoute");

const cookieparser = require("cookie-parser");

dotenv.config();
require("./db/connection");
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  console.log(req.user);
  res.send("!!!!!API working!!!!!");
});
app.use("/doctor", doctorRoutes);
app.use("/user", userRoutes);
app.use("/appointment", appointmentRoutes);
app.use("/category", Drcategory);
app.use("/hospital", hospitalRoutes);
app.use("/admin", adminRoutes);
app.use("/donate", donateRoutes);
app.use("/issue", issueRoutes);

// app.use(function (req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started at port ${PORT} `);
});
