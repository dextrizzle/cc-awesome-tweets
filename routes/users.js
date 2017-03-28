var express = require('express');
var router = express.Router();
const db = require('../db/conn');



router.get('/', function(req, res, next) {
  let { username: username } = req.cookies;
  db.query(`SELECT * FROM posts ORDER BY time DESC`)
    .then(function (posts) {
      res.render('dashboard', {posts: posts,username});
    })
    .catch(function (err) {
        res.send(err);
    });
});
router.post('/', function(req,res,next){
  let {username} = req.body;
  let {tweet} = req.body;
  let t = new Date();

  res.cookie('username',username);

  const post = req.body;

  db.query(`
    INSERT INTO posts (username, content) VALUES ($<username>, $<tweet>)
  `, post
  ).then(function () {
    res.redirect('/users');
  }).catch(function (err) { res.send(err) })
});

module.exports = router;
