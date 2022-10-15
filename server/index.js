// server/index.js
const express = require("express");
const http = require('http')
const PORT = process.env.PORT || 5000;
const path = require("path");
const app = require('./app.js');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});