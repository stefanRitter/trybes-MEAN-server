'use strict';

var http = require('http'),
    app = require('./app'),
    
    server = http.createServer(app).listen(app.get('port'), function () {
      console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
    });

module.exports = server;
