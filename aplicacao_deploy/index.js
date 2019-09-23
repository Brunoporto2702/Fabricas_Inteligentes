//Teste no PC
const express = require('express');
const cors = require('cors');
const api = express();

api.use(cors());


api.get('/', function(req, res){
	var rand = Math.random();

	console.log(rand);
	res.send(rand.toString());
});

api.listen(8000, ()=>(console.log('Escutando na porta 8000')));

