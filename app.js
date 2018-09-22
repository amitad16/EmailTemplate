const express = require("express");

const path = require("path");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("email");
});

app.get("/demo", (req, res) => {
  res.render("demo");
});

app.listen(port, () => console.log(`Listening to port ${port}`));
