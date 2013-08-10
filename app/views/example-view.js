
var BaseView = require('whir/core/views/WhirView');
var _ = require('underscore');
var UserModel = require('../models/user_model');


var MyView = BaseView.extend({

	tagName: 'div',

	initialize: function(options) {
		this.template = options.template;
		
	},

	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.empty();
		this.$el.html(JSON.stringify(this.model.toJSON()));
		
	}
    
});



module.exports = MyView;