let express = require('express');
let router = express.Router();
let {
  index,
} = require('../controllers/indexController');


/* GET home page. */
router.get('/', index);

module.exports = router;
