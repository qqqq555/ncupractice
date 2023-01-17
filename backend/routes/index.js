var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
// http://127.0.0.1:3000/get/ncufresh/?year=23
router.get('/get/:message/',function(req,res,next){
  res.send(req.params.message+req.query.year);
});
 
// curl -X POST http://127.0.0.1:3000/post --data message=hello
router.post('/post',function(req,res,next){
  res.send(req.body.message);
});