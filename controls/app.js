var express = require('express');
var app = express();
var router = express.Router();

var Student = require('../models/student.js');

// router.get('/', function(req, res){
//   res.send("Home Page");
// });

router.get('/studentInfo', function(req, res){
  console.log(req.query);
  if(req.query.firstName == null || req.query.lastName == null || req.query.degree == null || req.query.program == null){
      res.send("No information available or requested");
    }
    else if(req.query != null){
      var student = new Student(req.query.firstName, req.query.lastName, req.query.degree, req.query.program);
      res.render('main', {student: student});
    }
});

router.get('/*', function(req, res){
  res.send('undefined path');
});


// router.get('/', function(req, res, next) {
//   console.log("Hello");
// });
// router.get('/studentinfo', function(req, res){
//   console.log("In Router");
//   if(req.query == null){
//     res.send("No information available or requested");
//   }
//   else{
//     var student = new Student(req.query.firstName, req.query.lastName, req.query.degree, req.query.program);
//     res.render('main', {student: student});
//   }
//
// });
// router.get('/*', function(req, res){
//   res.send('undefined path');
// });

module.exports = router;
