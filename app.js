var express = require('express'),
    routes = require('./routes'),
    path = require('path'),
    app = express(),
    errorHandler = require('./middleware/error'),
    datastoreURI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/trybes',
    sessionStore = require('connect-mongo')(express);

// logging and error handling
if ('development' === app.get('env')) {
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
}

if ('production' === app.get('env')) {
  app.use(express.logger('short'));
  errorHandler(app);
}

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.enable('strict routing');

// sessions
app.use(express.cookieParser(process.env.COOKIE_SECRET || 'your secret here'));
app.use(express.session({ secret: process.env.SESSION_SECRET || 'your secret here' }));
app.use(express.csrf());

// middleware
app.use(express.compress());
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

// routes
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
routes(app);

module.exports = app;
