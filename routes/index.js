const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');



router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/api', apiRoutes);   Books


module.exports = router;