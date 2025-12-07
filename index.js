const express = require("express");
const app = express();

app.get("/", (req, res) => res.send(process.env.MESSAGE));

app.get("/api", (req, res) => {
  res.json({ status: "OK", time: new Date() });
});

app.listen(3000, () => console.log("server running on port 3000"));
