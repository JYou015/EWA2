// server/index.js
const express = require("express");
const PORT = process.env.PORT || 5000;
const path = require("path");
const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.post('/calc', (req, res) => {
    var r = {}; 
    const sum = req.body.items.reduce((accumulator, object) => {
      return accumulator + object.quantity * object.price;
    }, 0);
    r.sum = sum; 
    r.tax = sum * 0.13;
    r.total = r.sum + r.tax;

    res.json(r);
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});