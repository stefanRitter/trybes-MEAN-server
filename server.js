'use strict';

var app = require('./app'),
    http = require('http');

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
});
