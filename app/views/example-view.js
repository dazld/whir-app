var BaseView = require('whir/core/views/WhirView');
var _ = require('underscore');
var myModel = require('../models/user_model');

BaseView.prototype.bus.publish('module.dependencies', {
	name: __filename,
	deps: _.reduce(module.children, function(list, item) {
		list.push(item.id);
		return list;
	}, [])
});

var MyView = BaseView.extend({

	tagName: 'div',
	initialize: function() {

	},
	render: function() {

	}
});

module.exports = MyView;