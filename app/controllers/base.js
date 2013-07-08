var WhirController = require('whir/core/controllers/WhirController'),
	_ = require('whir/node_modules/underscore'),
    path = require('path');

var MyC = WhirController.extend({


	initialize: function(a, b, c) {

	},
	index: function(req, res, params) {
        console.log('default route');
    },
	users: function(req, res, params) {
        console.log('users route');
    }

});

module.exports = MyC;