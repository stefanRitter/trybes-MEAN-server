// Error handling middleware

module.exports = function (app) {
  'use strict';

  // 404s
  app.use(function (req, res, next) {
    res.status(404);

    if (req.accepts('html')) {
      return res.sendfile('./public/404.html');
    }

    if (req.accepts('json')) {
      return res.json({ error: 'Not found' });
    }

    // default response type
    res.type('txt');
    res.send('Sorry, could not find that page.');
  });

  // 500
  app.use(function (err, req, res, next) {
    console.error('error at %s\n', req.url, err.stack);
    res.send(500, '500 Server Error, sorry about this - this is an error on our side, we will look into it ASAP!');
  });
};
