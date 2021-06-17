const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.set("content-type", "text/html");
  res.sendFile(__dirname + "/public/bmi.html");
});

app.post("/", (req, res) => {

  const { height, weight } = req.body;
  result = weight / (height * height);
  res.set("content-type", "application/json");
  res.status(200).json({ result})
});

app.listen( 3000, () => {
  console.log('🚀 Server started on port 3000!');
});
