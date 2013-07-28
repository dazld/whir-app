var BaseModel = require('whir/core/models/WhirModel'),
	_ = require('underscore');

var User = BaseModel.extend({
	defaults: {
		thing: 1
	}
});

module.exports = User;