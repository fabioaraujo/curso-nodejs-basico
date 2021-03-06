require('marko/node-require').install();
require('marko/express');

//recupera uma funlção express
const express = require('express');
//executa a função recebida do required e guarda o retorno na constante app
const app = express();

//a ordem de declaração dos middlewares é importante
//middlewares funcionam de forma similar aos filtros do java

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
  })
);



const rotas = require('../app/rotas/rotas.js');
rotas(app);

/*
 importante incluir esses tratamentos após a inclusão de nossas rotas, 
 ou todas as rotasserão sobrescritas e responderam como 404
 */
app.use(function (erro, req, resp, next) {
    return resp.status(500).marko(
        require('../app/views/base/erros/500.marko')
    );

});

app.use(function (req, resp, next) {
    return resp.status(404).marko(
        require('../app/views/base/erros/404.marko')
    );

});

module.exports = app;