
var BaseView = require('whir/core/views/WhirView');
var _ = require('underscore');
var UserModel = require('../models/user_model');


var MyView = BaseView.extend({

	tagName: 'div',
	_template: 'text_block',
	initialize: function(options) {
		this.template = this._getTemplate(this._template);
	},

	render: function() {

		var data = this.model.toJSON();

		var html = this.template({
			title: data.url,
			text: data.uuid
		});

		this.$el.empty();
		this.$el.html(html);
		
	}
    
});



module.exports = MyView;