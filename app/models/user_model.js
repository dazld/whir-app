var BaseModel = require('whir/core/models/WhirModel'),
	_ = require('underscore');

BaseModel.prototype.bus.publish('module.dependencies', {
	name: __filename,
	deps: _.reduce(module.children, function(list, item) {
		list.push(item.id);
		return list;
	}, [])
});

var User = BaseModel.extend({
	defaults: {
		thing: 1
	}
});

module.exports = User;