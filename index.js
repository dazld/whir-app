var WhirApp = require('whir');

var MyC = require('./app/controllers/base');


var mc = new MyC()


var app = new WhirApp({
	some:'config'
});


app.factory.addTemplates({
	base: function(){ return 'base'; }
});

/*app.addControllers({
    //
});*/

app.factory.addRoutes({
	'/':'home'
});

app.start();