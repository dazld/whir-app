var WhirApp = require('whir');
var bb = require('backbone');


var app = new WhirApp({
	some:'config'
});


app.factory.addTemplates({
	base: function(){ return 'base'; }
});

app.factory.addRoutes({
	'/':'home'
});

app.start();