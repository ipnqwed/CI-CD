const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello from my self-hosted CI/CD!"));
app.listen(3000);
