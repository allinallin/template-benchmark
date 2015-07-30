var gaikan = require('gaikan');
var compiled;
var tplData;
var filePath;

module.exports.prepare = function (data, done) {
	tplData = data;
	filePath = __dirname + '/tpl_escaped.html';
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	file = __dirname + '/tpl_unescaped.html';
	done();
};

module.exports.step = function (done) {
	var html = gaikan(filePath, tplData, 'gaikan', undefined, true);
	done(undefined, html);
};