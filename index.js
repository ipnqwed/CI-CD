const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD!");
});

app.get("/api", (req, res) => {
  res.json({ status: "OK", time: new Date() });
});

app.listen(3060, () => console.log("server running on port 3000"));
