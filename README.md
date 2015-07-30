# Node.JS template engines benchmark

Fork from [/baryshev/template-benchmark](https://github.com/baryshev/template-benchmark).

- Updated templating engines to latest
- Removed engines no longer maintainted
- Added React and Mustache tests

## Engines

- [React](https://github.com/facebook/react) ([website](https://facebook.github.io/react/))
- [Mustache](https://github.com/janl/mustache.js) ([website](https://mustache.github.io/))
- [doT](https://github.com/olado/doT) ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) ([website](http://linkedin.github.com/dustjs/))
- [ECT](https://github.com/baryshev/ect) ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) 
- [Handlebars.js](https://github.com/wycats/handlebars.js/) ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) ([website](http://jade-lang.com/))
- [Underscore](https://github.com/documentcloud/underscore) ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel Core i7 2.2Ghz
- OS: OSX 10.10.4
- Node.JS version: 0.10.36

## Results

Test ran with latest versions as of 2015/08/30.

	Rendering 1000 templates:

	React
	  Escaped   : 3032ms
	  Unescaped : 2946ms
	  Total     : 5978ms
	
	ECT
	  Escaped   : 23ms
	  Unescaped : 1ms
	  Total     : 24ms
	
	Dust
	  Escaped   : 28ms
	  Unescaped : 11ms
	  Total     : 39ms
	
	Hogan.js
	  Escaped   : 17ms
	  Unescaped : 4ms
	  Total     : 21ms
	
	EJS without `with`
	  Escaped   : 30ms
	  Unescaped : 12ms
	  Total     : 42ms
	
	doT
	  Escaped   : 18ms
	  Unescaped : 3ms
	  Total     : 21ms
	
	Underscore
	  Escaped   : 17ms
	  Unescaped : 12ms
	  Total     : 29ms
	
	EJS
	  Escaped   : 45ms
	  Unescaped : 27ms
	  Total     : 72ms
	
	Mustache.js
	  Escaped   : 37ms
	  Unescaped : 14ms
	  Total     : 51ms
	
	Handlebars.js
	  Escaped   : 34ms
	  Unescaped : 8ms
	  Total     : 42ms

## Usage

	git clone git://github.com/allinallin/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
