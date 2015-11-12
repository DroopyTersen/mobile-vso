require('babel-polyfill')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')


var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var passport = require('passport');
var flash    = require('connect-flash');

var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var createRoutes = require("./server/routes");
var setupPassport = require("./server/passport");

setupPassport(passport);

app.use(bodyParser()); // get information from html forms

//AUTHENTICATION 
app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({ secret: 'shhhhhhh' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// WEBPACK DEV SERVER
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

createRoutes(app, passport);

var host = process.env.IP;
var port = process.env.PORT || 3000;
console.log(port);
app.listen(port, host, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
