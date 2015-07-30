var fs = require('fs');
var Mustache = require('mustache');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.html', 'utf8');
	tplData = data;
	Mustache.parse(str);
	compiled = str;
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.html', 'utf8');
	tplData = data;
	Mustache.parse(str);
	compiled = str;
	done();
};

module.exports.step = function (done) {
	var html = Mustache.render(compiled, tplData);
	done(undefined, html);
};