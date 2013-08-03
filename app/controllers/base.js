var WhirController = require('whir/core/controllers/WhirController'),
    _ = require('whir/node_modules/underscore'),
    path = require('path'),
    Q = require('whir/node_modules/q');



var MyC = WhirController.extend({


    initialize: function() {
        console.log('init: ', this.name);

        // setup the internal sandbox, if wanted
        this._createSandbox({
            $UserId: this.requestData.get('uuid')
        });

        // ..but also have a BB model with state data in it on the instance
        // console.log(this.requestData.toJSON());

    },
    index: function(req, res, params) {
        var _this = this;
        var building = Q.defer();


        // var MyView = this.getSandboxedModule(require.resolve('../views/example-view'));
        var MyView = require('../views/example-view');

        var view = new MyView({
            model: this.requestData
        });

        view.render();

        setTimeout(function() {
            building.resolve(view.$el.html());
        }, 10);



        return building.promise;

    },
    users: function(req, res, params) {
        console.log('users route');
        return 'users';
    },
    _notCallable: function() {
        return 'uhoh';
    }

});

module.exports = MyC;