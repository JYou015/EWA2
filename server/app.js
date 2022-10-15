// server/index.js
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/calc', (req, res) => {
    var r = {}; 
    const sum = req.body.items.reduce((accumulator, object) => {
      return accumulator + object.quantity * object.price;
    }, 0);
    r.sum = Math.round(sum * 100) / 100; 
    r.tax = Math.round(sum *0.13 * 100) / 100;
    r.total = r.sum + r.tax;

    res.json(r);
});

// app.post('/calc', (req, res) => {
//   res.json(typeof req.body);
// });

module.exports = app;