const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./router/User");
const imageRouter = require("./router/Image");

const app = express();
dotenv.config();

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("db active"))
      .catch((err) => console.log("db failure"));
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "successfully" });
});

app.use("/user", userRouter);
app.use("/image", imageRouter);

app.listen(process.env.PORT, () => {
  connect();
  console.log("backend active");
});
