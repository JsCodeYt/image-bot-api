const router = require("express").Router();
const Image = require("../models/Image");

router.post("/new", async (req, res) => {
  try {
    const newPost = new Image(req.body);
    const savePost = await newPost.save();
    res.status(201).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    if (req.query.cat) {
      const filterImage = await Image.find({ cat: req.query.cat });
      return res.status(200).json(filterImage);
    } else {
      return res.status(400).json({
        message: "Iltimos rasmni categoriasini kiriting !",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await Image.findByIdAndDelete(req.params.id).then(() => {
      res.status(200).json("rasm o'chirib tashlandi !");
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
