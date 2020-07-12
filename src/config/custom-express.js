require('marko/node-require').install();
require('marko/express');

//recupera uma funlção express
const express = require('express');
//executa a função recebida do required e guarda o retorno na constante app
const app = express();

//a ordem de declaração dos middlewares é importante

const bodyParser = require('body-parser');

app.use('/estatico', express.static("./src/app/public"));

app.use(bodyParser.urlencoded({
    extended: true
}));

const methodOverride = require('method-override');

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }))

const rotas = require('../app/rotas/rotas.js');
rotas(app);

module.exports = app;