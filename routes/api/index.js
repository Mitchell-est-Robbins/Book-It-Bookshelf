const router = require('express').Router();
const apiRoutes = require('./users');
const homeRoutes = require('./homeRoutes');

const app = express();

router.use('localhost:3000/books', homeRoutes);
router.use('api', apiRoutes);


module.exports = router;