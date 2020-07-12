require('marko/node-require').install();
require('marko/express');

//recupera uma funlção express
const express = require('express');
//executa a função recebida do required e guarda o retorno na constante app
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas.js');
rotas(app);

module.exports = app;