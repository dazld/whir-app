var WhirController = require('whir/core/controllers/WhirController'),
	_ = require('whir/node_modules/underscore');

var MyC = WhirController.extend({
   
	index: function(req, res, params) {
        console.log('default route');

        return 'hi';
    },
	route: function(req, res, params) {
        console.log('users route');
        return 'users';
    }

});

module.exports = MyC;