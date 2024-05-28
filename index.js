const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

const genresRouter = require('./routes/genres.js');
const booksRouter = require('./routes/books.js');
const authorsRouter = require('./routes/authors.js');
const error = require('./utilities/error.js');

//Serve static files  (images, css) from publick folder
const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')))

// We use the body-parser middleware FIRST so that
// we have access to the parsed data within our routes.
// The parsed data will be located in "req.body".
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// New logging middleware to help us keep track of
// requests during testing!
app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
  );
  // This checks if there are keys in the req.body object (sent from the client)
  if (Object.keys(req.body).length > 0) {
    console.log('Containing the data:');
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

// Valid API Keys.
const apiKeys = ['home-library-api-key'];

// New middleware to check for API keys!
// Note that if the key is not verified,
// we do not call next(); this is the end.
// This is why we attached the /api/ prefix
// to our routing at the beginning!
app.use('/api', function (req, res, next) {
  const key = req.query['api-key'];

  // Check for the absence of a key.
  if (!key) {
    next(error(400, 'API Key Required'));
  }

  // Check for key validity.
  if (apiKeys.indexOf(key) === -1) {
    next(error(401, 'Invalid API Key'));
  }

  // Valid key! Store it in req.key for route access.
  req.key = key;
  next();
});

// API ROUTES
// Genres Route
app.use('/api/genres', genresRouter);

// Books Route
app.use('/api/books', booksRouter);

// Authors Route
app.use('/api/authors', authorsRouter);

// Route to index view
/*When a user visits the root URL (http://localhost:3000), 
this route handler fetches the list of genres from API endpoint on the server, 
renders an "index" view, and passes the fetched genres data to the view for display. 
If any errors occur, it logs to the console. */
app.get('/', function(req, res) {
  const url = req.protocol + '://' + req.get('host');
  fetch(url + '/api/genres?api-key=home-library-api-key')
  .then((response) => response.json())
  .then((data) => {
    const genres = data.genres;
    res.render('index', {"genres": genres});
  })
  .catch((error) => {
      console.log(error)
  });
});

app.get('/books', function(req, res) {
  const genreId = req.query.genreId;
  const url = req.protocol + '://' + req.get('host');
  fetch(url + '/api/books?api-key=home-library-api-key')
  .then((response) => response.json())
  .then((data) => {
    const books = data.books;
    const booksByGenre = books.filter((book) => book.genreId == genreId);
    res.render('books', {"books": booksByGenre});
  })
  .catch((error) => {
      console.log(error)
  });
});

// Custom 404 (not found) middleware.
// Since we place this last, it will only process
// if no other routes have already sent a response!
// We also don't need next(), since this is the
// last stop along the request-response cycle.
app.use((req, res, next) => {
    next(error(404, 'Resource Not Found'));
});
  
// Error-handling middleware.
// Any call to next() that includes an
// Error() will skip regular middleware and
// only be processed by error-handling middleware.
// This changes our error handling throughout the application,
// but allows us to change the processing of ALL errors
// at once in a single location, which is important for
// scalability and maintainability.
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

// Make the server start listening for requests (turns the server on)
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});