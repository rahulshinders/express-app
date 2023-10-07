const express = require("express");
const body_parse = require("body-parser");
const app = express();

app.use(body_parse.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Add <code>/name</code> to the url to register your name!<h1>");
});

app.get("/name", (req, res) => {
  res.sendFile(__dirname + "/name.html");
});

app.post("/name", (req, res) => {
  const { fn, ln } = req.body;
  let name = fn + " " + ln;
  res.send(`<h2>My name is ${name}<h2>`);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
