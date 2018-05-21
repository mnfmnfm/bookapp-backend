'use strict';

const cors = require('cors');
const express = require('express');
const pg = require('pg');

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.log(err));

const app = express();
app.use(cors());

app.get('/books', (req, res) => {
  res.send('books are great');
});

app.use('*', (req, res) => {
  res.status(404).send('resource not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));