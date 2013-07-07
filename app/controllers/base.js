var WhirController = require('whir/core/controllers/WhirController'),
	_ = require('whir/node_modules/underscore');

var MyC = WhirController.extend({
	name: 'base',
	routes: {},
	initialize: function(a, b, c) {
		
	},
	doStuff: function() {},
	index: function(req, res) {},
	users: function(req, res) {}
});

module.exports = MyC;