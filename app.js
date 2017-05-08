
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var member={};
// =================================================================
// myHome Server 영역입니다.( 2017-04-26 )

app.post("/memberJoinAction", function(req, res){

  var name = req.body.name;
  var id = req.body.id;
  var pass = req.body.pwd;

  member["name"] = name;
  member["id"] =  id;
  member["pass"] = pass;

  console.log("name="+name+", id="+id+", pass="+pass);
  res.end("회원 가입이 정상적으로 처리되었습니다. !");
});

app.get("/myForm/loginForm", function(req, res){
  var loginId = req.query.loginId;
  res.json({loginId:loginId, isLogin:true});
});

app.post("/loginAction", function(req, res){
  var id = req.body.id;
  var pwd = req.body.pwd;
  var idCheck = req.body.idCheck;

  console.log("id="+id+", pwd="+pwd+", idCheck="+idCheck);
  res.end("회원님 반갑습니다  !");
});
// =================================================================

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
