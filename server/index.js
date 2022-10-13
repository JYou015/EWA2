// server/index.js
const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

app.get("/apil", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});