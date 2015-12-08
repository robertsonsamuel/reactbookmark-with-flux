var express = require('express');
var router = express.Router();

router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

var links = [];

router.get('/api/links', function(req, res, next) {
   res.json({ links: links });
});

router.post('/api/links', function(req, res, next) {
   var newLink = req.body;
   newLink.id = Date.now();
   newLink.like = false;
   newLink.ip = req.ip;
   links.push(newLink);
   res.json(newLink);
});


router.post('/api/deletelink', function(req, res, next){
  console.log(req.body);
  for(var i = 0; i < links.length; i++) {
    if(links[i].id == req.body.id) {
        links.splice(i, 1);
        break;
    }
  }
  res.send({links:links});
});


router.post('/api/likelink',function (req,res,next) {
  console.log('req.body',req.body);
  if(req.body.like === 'false'){
    for(var i = 0; i < links.length; i++) {
      if(links[i].id == req.body.id) {
          links[i].like = true;
          break;
      }
    }

  }else {
    for(var i = 0; i < links.length; i++) {
      if(links[i].id == req.body.id) {
          links[i].like = false;
          break;
      }
    }

  }

  
  res.send({links:links});
})


module.exports = router;
