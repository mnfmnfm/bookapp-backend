'use strict';

const express = require('express');
const app = express();

app.get('/books', (req, res) => {
  res.send('books are great');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));