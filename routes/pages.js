
exports.getIndex = function (req, res) {
  res.render('index', { title: 'TRYBES' });
};

exports.getAbout = function (req, res) {
  res.render('about', { title: 'TRYBES - About' });
};

exports.postEmail = function (req, res) {
  res.render('about', { title: 'TRYBES - About' });
};
