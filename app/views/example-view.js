var BaseView = require('whir/core/views/WhirView');
var _ = require('underscore');

var $UserModel = require('../models/user_model');
var $UserId = 'original';


var MyView = BaseView.extend({

	tagName: 'div',

	initialize: function($UserId) {
		this.uid = $UserId;
	},

	render: function() {

		this.$el.empty();
		this.$el.html(this.uid);
		
	}
    
});



module.exports = MyView;