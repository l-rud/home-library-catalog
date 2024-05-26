const express = require('express');
const router = express.Router();
//Importing the books data from database file
const books = require('../data/books.js');

// BASE PATH
// - /api/books

// Creating a GET route for the entire books database
// This would be impractical in larger data sets(?)
// GET /api/books
router.get('/', (req, res) => {
  const links = [
    {
      href: 'books/:id',
      rel: ':id',
      type: 'GET',
    },
  ];

  res.json({ books, links });
});

// Creating a simple GET route for individual book,
// using a route parameter for the unique id.
// GET /api/books/:id
router.get('/:id', (req, res, next) => {
  const book = books.find((u) => u.id == req.params.id);

  const links = [
    {
      href: `/${req.params.id}`,
      rel: '',
      type: 'PATCH',
    },
    {
      href: `/${req.params.id}`,
      rel: '',
      type: 'DELETE',
    },
  ];

  if (book) res.json({ book, links });
  else next();
});

//Creating a book (POST)
// POST /api/books
router.post('/', (req, res) => {
  // Within the POST request route, we create a new
  // book with the data given by the client
  if (req.body.name && req.body.description) {
    if (books.find((u) => u.name == req.body.name)) {
      res.json({ error: 'book name already Taken' });
      return;
    }

    const book = {
      id: books[books.length - 1].id + 1,
      name: req.body.name,
      description: req.body.description,
    };

    books.push(book);
    res.json(books[books.length - 1]);
  } else next(error(400, 'Insufficient Data'));
});

// PATCH /api/books/:id
router.patch('/:id', (req, res) => {
  // Within the PATCH request route, we allow the client
  // to make changes to an existing book in the database
  const book = books.find((u, i) => {
    if (u.id == req.params.id) {
      // iterating through the book object and updating each property with the data that was sent by the client
      for (const key in req.body) {
        books[i][key] = req.body[key];
      }
      return true;
    }
  });

  if (book) res.json(book);
  else next();
});

// DELETE /api/books/:id
router.delete('/:id', (req, res) => {
  // The DELETE request route simply removes a resource
  const book = books.find((u, i) => {
    if (u.id == req.params.id) {
      books.splice(i, 1);
      return true;
    }
  });

  if (book) res.json(book);
  else next();
});

module.exports = router;