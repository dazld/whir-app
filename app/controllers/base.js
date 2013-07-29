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


        var MyView = this.getSandboxedModule(require.resolve('../views/example-view'));

        var view = new MyView();
        view.render();
        
        setTimeout(function(){
            console.log(_this.uuid);
            building.resolve(view.$el.html());
        },3000);
        


        return building.promise;

    },
    users: function(req, res, params) {
        console.log('users route');l
        return 'users';
    },
    _notCallable: function() {
        return 'uhoh';
    }

});

module.exports = MyC;