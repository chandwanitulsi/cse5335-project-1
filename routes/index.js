var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res, next) {
   res.sendfile(__dirname + '/index.html');
});

/* GET Details page. */
router.get('/details', function(req, res, next) {
	
	console.log(req.query.substring);
	
	var countryData=require('./countryData.json');
	
	
   res.send(countryData);
});

module.exports = router;
