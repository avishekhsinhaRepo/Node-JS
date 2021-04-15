var express = require('express');
var router = express.Router();
const isValidUser = require('../middle-ware/loginMiddleware');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/login');
});

router.get('/login', function (req, res, next) {
  const loginErrorMessage = req.query.msg;
  if (loginErrorMessage == 'fail') {
    res.render('login', { error: 'Login Failed' });
  }
  res.render('login', { error: '' });
});

/*Login Route*/
router.post('/login', isValidUser, function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  if (password == 'amit') {
    res.cookie("username", username);
    res.redirect('/landing');
  } else {
    res.redirect('/login?msg=fail');
  }
});

router.get('/landing', function (req, res, next) {
  res.render('landing', { username: req.cookies.username });
});

router.get('/logout', function (req, res, next) {
  res.clearCookie('username');
  res.redirect('/');
});

module.exports = router;
