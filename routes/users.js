var express = require('express');
var router = express.Router();

vOne = 10;
vTwo = 15;

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(vOne > vTwo){
    vOne -= vTwo;
  }else{
    vTwo -= vOne;
  }
  res.send(`Values are: ${vOne} and ${vTwo}`);
});

module.exports = router;
