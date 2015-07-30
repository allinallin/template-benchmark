var fs = require('fs');
var React = require('react');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	tplData = data;
	var Component = React.createFactory(require('./tpl_escaped.js'));
	compiled = Component({
		title: tplData.title,
		text: tplData.text,
		projects: tplData.projects
	});
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	var Component = React.createFactory(require('./tpl_unescaped.js'));
	compiled = Component({
		title: tplData.title,
		text: tplData.text,
		projects: tplData.projects
	});
	done();
};

module.exports.step = function (done) {
	var html = React.renderToString(compiled);
	done(undefined, html);
};