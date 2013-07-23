var BaseModel = require('whir/core/models/WhirModel');

var User = BaseModel.extend({
	defaults: {
		thing: 1
	}
});

module.exports = User;