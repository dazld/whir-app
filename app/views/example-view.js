var BaseView = require('whir/core/views/WhirView');
var _ = require('underscore');
var myModel = require('../models/user_model');
var userId = 'original';

// BaseView.prototype.bus.publish('module.dependencies', {
// 	name: __filename,
// 	deps: _.reduce(module.children, function(list, item) {
// 		list.push(item.id);
// 		return list;
// 	}, [])
// });

var MyView = BaseView.extend({

	tagName: 'div',
	initialize: function() {
		this.uid = userId;
	},
	render: function() {

		this.$el.empty();
		this.$el.html(this.uid);
		
	}
});



module.exports = MyView;