var express = require('express');
var router = express.Router();
const ctrlLocations= require('../controllers/locations');
const ctrlOthers=require('../controllers/others');

/* Locations Pages */
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationinfo);
router.get('/locations/review/new',ctrlLocations.addreview);

/* Others Pages */

router.get('/about',ctrlOthers.about);

module.exports = router;
