const test = require('ava');
const request = require('supertest');
const express = require("express");
const app = require('./../server/app.js');
app.use(express.json());

test('Correct calculation for one product', async t => {
    const items = [{product: "a", quantity: 5, price: 20}]
    const response = await request(app)
      .post('/calc')
      .set('Content-Type', 'application/json')
    .accept('application/json')
    .send(JSON.stringify({items}))
  
        console.log(response.body.total)
      t.is(response.body.total, 113);
  })

  test('Empty list case', async t => {
    const items = []
    const response = await request(app)
      .post('/calc')
      .set('Content-Type', 'application/json')
    .accept('application/json')
    .send(JSON.stringify({items}))
  
        console.log(response.body.total)
      t.is(response.body.total, 0);
  })

  test('Sample multiple items case', async t => {
    const items = [{product: "a", quantity: 5, price: 20}, {product: "b", quantity: 10, price: 20}]
    const response = await request(app)
      .post('/calc')
      .set('Content-Type', 'application/json')
    .accept('application/json')
    .send(JSON.stringify({items}))
  
      t.is(response.body.total, 339);
  })