var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('MalePop', { title: 'Express' });
});


router.get('/femalePop', function(req,res,next){
    res.render('FemalePop');
})

module.exports = router;
