var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.value){
        random = parseInt(req.query.value);
    }else{
        random = Math.floor(Math.random() * 100) + 1;
    }
    fun = Math.clz32(random);
    res.send(`Math.clz32 applied to ${random} is ${fun}`);
});

module.exports = router;