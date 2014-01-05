/* jshint camelcase: false */

'use strict';

var express = require('express'),
    path = require('path'),
    app = express(),
    errorHandler = require('./middleware/error'),
    port = 3000,
    SessionStore = require('connect-mongo')(express),
    db = require('./db'),
    routes = require('./routes');

// logging and error handling
if ('development' === app.get('env') || 'test' === app.get('env')) {
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
}

if ('test' === app.get('env')) {
  port = 5000;
}

if ('production' === app.get('env')) {
  app.use(express.logger('short'));
  errorHandler(app);
}

// connect to datastore
app.locals.mongooseConnection = db.connect(app);

// all environments
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.enable('strict routing');

// middleware
app.use(express.compress());
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

// sessions
app.use(express.cookieParser(process.env.COOKIE_SECRET || 'dev secret'));
app.use(express.session({
  secret: process.env.SESSION_SECRET || 'dev secret',
  store: new SessionStore({ mongoose_connection: app.locals.mongooseConnection })
}));
app.use(express.csrf());
app.use(function (req, res, next) { res.locals.session = req.session; next(); });

// routes
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
routes(app);

module.exports = app;
