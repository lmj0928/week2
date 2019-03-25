var express = require('express');
var router = express.Router();
var mongo=require('mongodb-curd');

var db='lmj';
var com='week2';

/* GET home page. */
router.get('/getData', function(req, res, next) {
  mongo.find(db,com,function(result){
    if(!result){
      res.json({code:0,msg:"没找到"})
    }else{
    res.json({code:1,data:result})
    }
  })
}); //渲染

module.exports = router;
