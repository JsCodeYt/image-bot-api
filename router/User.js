const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/isRegister/:id", async (req, res) => {
  try {
    if (await User.findOne({ id: req.params.id })) {
      return res.status(200).json(true);
    } else {
      return res.status(404).json(false);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const usersCount = await User.find().count();
    res.status(200).json(usersCount);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
