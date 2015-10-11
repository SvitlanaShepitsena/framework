'use strict'


var express = require('express');
var compression = require('compression')
var app = express();


app.use(compression());

app.use(express.static(__dirname + '/dev/local-workspace/build/svitlana~radio'));

app.listen(process.env.PORT || 80, function () {
	console.log('listening');
});