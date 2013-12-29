// dependencies
var express = require('express'),
    routes = require('./routes'),
    path = require('path'),
    app = express(),
    errorHandler = require('./routes/error').errorHandler,
    datastoreURI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/trybes';

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.enable('strict routing');

app.use(express.compress());
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
//app.use(express.session());
app.use(express.static(path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
}

if ('production' === app.get('env')) {
  app.use(express.logger('short'));
  app.use(errorHandler);
}

// routes
app.use(app.router);
routes(app);


module.exports = app;
