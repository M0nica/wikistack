var express = require('express');
var router = express.Router();

/* GET  users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
//render add html at http://localhost:3000/add
  res.render('add');
});

/*POST users listing*/

router.post('/submit', function(req, res) {
  // this is the /add/submit route
});



module.exports = router;
