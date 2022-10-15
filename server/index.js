// server/index.js
const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());


app.post('/calc', (req, res) => {
  console.log("Aaaa");
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