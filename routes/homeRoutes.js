const router = require('express').Router();
const { Book, User } = require('../models');
const withAuth = require('../utils/auth');


// ====connecting the user to their library=======================================================================
router.get('/', async (req, res) => {
  // try {
  //   // Get all books and JOIN with user data
  //   const bookData = await Book.findAll({
  //     // include: [
  //     //   {
  //     //     model: User,
  //     //     attributes: ['name'],
  //     //   },
  //     // ],
  //   });

    // Serialize data so the template can read it
    // const books = bookData.map((book) => book.get({ plain: true }));

    // Pass serialized data and session flag into template
    //--------------change this to whatever the mainpage template is called
    res.render('login', { 
      // books, 
      // logged_in: req.session.logged_in 
    });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});


// ====pulling up the books and adding them to template========================================================
//  ---------change this to that same handlebar as below
router.get('/project/:id', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const book = bookData.get({ plain: true });
// -------------------whatever the handlebar is called for the partial where books are
    res.render('project', {
      ...book,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//may not be needed---------
// ===========this prevents people moding a library without access=======================================================
// Use withAuth middleware to prevent access to route

// ----------going to this place
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });
//------------------show the handlebar associated with this
    res.render('profile', { //-----------library?
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//==================================================================
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile'); //----------library?
  //   return;
  // }

  res.render('login'); //if not show the login handlebar
});


router.get('/welcome', (req, res) => {
  res.render('welcome'); //if not show the login handlebar
});

router.get('/signup', (req, res) => {
  res.render('signup'); //if not show the login handlebar
});

router.get('/addBook', (req, res) => {
  res.render('addBook'); //if not show the login handlebar
});

router.get('/myLibrary', (req, res) => {
  const library = [{
    title: "Ender's Game",
    author: "Orson Scott Card",
    comment: "That kid had to be messed up in the head."
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    comment: "I need to read this one still."
  },
  {
    title: "The Hobbit, or There and Back Again",
    author: "J. R. R. Tolkien",
    comment: "Soooo long, but worth it."
  }]

const length = library.length;


  res.render('myLibrary', {library: library, length: length}); //if not show the login handlebar
});

module.exports = router;
