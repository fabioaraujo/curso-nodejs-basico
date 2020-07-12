//recupera uma funlção express
const express = require('express');
//executa a função recebida do required e guarda o retorno na constante app
const app = express();

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000.');
});

app.get('/', function(req, resp) {
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>
        `
    );
});

app.get('/livros', function(req, resp) {
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de livros </h1>
                </body> 
            </html>
        `
    );
});
