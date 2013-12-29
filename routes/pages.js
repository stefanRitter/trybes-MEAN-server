
// index
exports.getIndex = function (req, res) {
  res.render('index', { title: 'TRYBES' });
};

exports.postIndex = function (req, res) {
  res.render('index', { title: 'TRYBES' });
};


// about
exports.getAbout = function (req, res) {
  res.render('about', { title: 'TRYBES - About' });
};

exports.postAbout = function (req, res) {
  res.render('about', { title: 'TRYBES - About' });
};
