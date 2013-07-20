var BaseModel = require('whir/core/models/WhirModel');

var User = BaseModel.extend({
	defaults: {
		lala: 1
	}
});

module.exports = User;