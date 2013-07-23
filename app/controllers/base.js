var WhirController = require('whir/core/controllers/WhirController'),
    _ = require('whir/node_modules/underscore'),
    path = require('path'),
    Q = require('whir/node_modules/q');




var MyC = WhirController.extend({


    initialize: function() {
        // console.log(this.name)
    },
    index: function(req, res, params) {
        var _this = this;
        var building = Q.defer();


        var myView = new this.views['example-view']();

        var result = _this.templates.base(this);

        building.resolve(result);


        return building.promise;

    },
    users: function(req, res, params) {
        console.log('users route');
        return 'users';
    },
    notCallable: function() {
        return 'uhoh';
    }

});

module.exports = MyC;