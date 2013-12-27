var app = require('./app'),
    http = require('http'),
    server = http.createServer(app).listen(app.get('port'), function () {
      'use strict';
      console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
    });
