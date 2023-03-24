const express = require("express");
const app = express();
app.use(express.json());

let images = [];
app.get("/images", (req, res) => {
  res.send({ images });
});
app.post("/images", (req, res) => {
  images = req.body.images;
  res.send({ images });
});

app.listen(3333, () => {
  console.log("Application listening on port 3333!");
});
