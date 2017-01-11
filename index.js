'use strict'

var express = require('express'); /* Carga la libreria express */
var bodyParser = require('body-parser');
	
var app = express(); /* Se instancia el servidor HTTP */
var port = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/prueba', function(req, res){
	res.send({texto: "Hola mundo con NodeJS y Express"});
});

app.get('/test/:name', function(req, res){

	var nombre = req.params.name;

	res.status(200).send({
		"message" : `Mi nombre es ${nombre}, hola mundo`
	});
});

app.get('/test3/:name?', function(req, res){

	if(req.params.name){
		var name = req.params.name;		
	} else {
		var name = "Sin Nombre";
	}


	res.status(200).send({
		"message" : `${name} - esto es una prueba 3`
	});
});

app.listen(port, function(){
	console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
}); /* Numero de puerto de escucha */
