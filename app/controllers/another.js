var WhirController = require('whir/core/controllers/WhirController'),
	_ = require('whir/node_modules/underscore'),
    path = require('path');

var MyC = WhirController.extend({
    routes: {
        "blabalbalbal/blablabalab":"index"
    },

	initialize: function(a, b, c) {
        console.log(this.name)
	},
	index: function(req, res, params) {
        console.log('default route',arguments);
        return 'hi';
    },
	route: function(req, res, params) {
        console.log('users route');
        return 'users';
    }

});

module.exports = MyC;