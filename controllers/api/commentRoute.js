// TODO: create api routes [File Location (s) _ controllers/api]
// TODO: Export from index [File Location (s) _ controllers/api]
// TODO: Use middle ware to connect [File Location (s) _ controllers/api]
// TODO: Authentification [File Location (s) _ controllers/api]
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils');


router.post('/', withAuth, async (req, res) => {
    try {   const newComment = await Comment.create({
            ...req.body,
        userId: req.session.userId,
      });
      res.json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  







router.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog'});
})


module.export = router;