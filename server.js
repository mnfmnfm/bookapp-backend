'use strict';

const cors = require('cors');
const express = require('express');
const pg = require('pg');

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.log(err));

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('you made it');
});

app.get('/cool/stuff/here', (req, res) => {
  res.send('cool pic of a dog probably');
});















app.get('/books', (req, res) => {
  client.query('SELECT book_id, title, author, image_url FROM books;')
    .then( result => {
      res.send(result.rows);
    })
});

app.use('*', (req, res) => {
  res.status(404).send('resource not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));