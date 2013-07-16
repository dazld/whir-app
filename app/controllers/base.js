var WhirController = require('whir/core/controllers/WhirController'),
	_ = require('whir/node_modules/underscore'),
    path = require('path');

var MyC = WhirController.extend({

    routes: {
        '':'index',
        'something/else':'index'
    },
	initialize: function() {
		// console.log(this.name)
	},
	index: function(req, res, params) {
        return 'hi there';
    },
	users: function(req, res, params) {
        console.log('users route');
        return 'users';
    },
    notCallable: function(){
        return 'uhoh';
    }

});

module.exports = MyC;