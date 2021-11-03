const router = require('express').Router();
const books = require('../db/books');


/** GET */
router.get('localhost:3000/', function(_req, res) {
  books
    .getNotes()
    .then(('/books') => {
      return: res.json(books),
    })
    .catch((err) => res.status(500).json(err));
});


/** PUT */
router.post('/books', (req, res) => {
  books
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});


//** DELETE */
router.delete('/books/:id', (req, res) => {
  books
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
}

// module.exports = router;
app.post('/', function (req, res) {
  res.send('Got a POST request')
});

module.exports = router;