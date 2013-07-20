var BaseView = require('whir/core/views/WhirView');
var myModel = require('../models/user_model');

var MyView = BaseView.extend({

	tagName: 'div',
	model: myModel
});

module.exports = MyView;