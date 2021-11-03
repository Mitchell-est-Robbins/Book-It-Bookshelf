const router = require('express').Router();
const { User } = require('../models');

/*
router.get( /welcome•, (req, res) {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  res. redirect( ' /profile'); // ----- -----library?
  return;
  
*/

router.post('./', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);

    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: REQUIREEMTS } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect configuration' });
      return;
    }


    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect login, try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'Welcome!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});




