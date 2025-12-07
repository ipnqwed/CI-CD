const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello from my self-hosted CI/CD! v2"));
app.listen(3000);
app.get("/api", (req, res) => {
  res.json({ status: "OK", time: new Date() });
});
app.get("/", (req, res) => res.send(process.env.MESSAGE));
