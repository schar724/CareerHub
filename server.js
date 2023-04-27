const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 6600;
const data = require("./public/data/data.json");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + "/public")));

app.get("/", function (req, res) {
  res.render("pages/home");
});

app.get("/data", function (req, res) {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
