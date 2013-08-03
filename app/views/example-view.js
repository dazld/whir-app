
var BaseView = require('whir/core/views/WhirView');
var _ = require('underscore');
var UserModel = require('../models/user_model');


var MyView = BaseView.extend({

	tagName: 'div',

	initialize: function() {
		
		
	},

	render: function() {

		this.$el.empty();
		this.$el.html(JSON.stringify(this.model.toJSON()));
		
	}
    
});



module.exports = MyView;