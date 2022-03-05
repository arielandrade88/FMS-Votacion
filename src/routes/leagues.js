let express = require('express');
let router = express.Router();
let {
  league
} = require('../controllers/leaguesController');


/* LEAGUES */
router.get("/liga/:league", league)

module.exports = router;
