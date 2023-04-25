const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/home");
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
