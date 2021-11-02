const routesr= require('express').Router;

const userRoutes = require('./userAuthRoutes.js.js');
const PostRoutes = require('./postRoutes');
const upVote = require('./upVoteRoutes');

eouter.use('user', userRoutes);
eouter.use('post', postRoutes);
eouter.use('uoVotes', upVoteRotues);

module.export = router;

