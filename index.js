var express = require('express');
var fs = require('fs');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
require('dotenv').config();

var app = express();


app.use(express.static('./public'));

app.post('/api/upload', upload.single('file'), function(req, res, next){

  var obj = {
    filename: req.file.originalname,
    size: req.file.size,
    comment: req.body.desc
  };
  console.log(obj);

  res.send(obj);
  res.end();

});

app.listen(process.env.PORT || 8080);
