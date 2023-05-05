const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/auth");

const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB Connected!`);
  })
  .catch((err) => {
    console.log(er.message);
  });

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// middlewares
app.use(cors());
app.use(express.json());

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});
