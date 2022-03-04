let express = require('express');
let router = express.Router();
let {
  leagues
} = require('../controllers/leaguesController');


/* LEAGUES */
router.get("/liga/:liga", leagues)

module.exports = router;
