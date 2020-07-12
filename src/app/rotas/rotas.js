const db = require('../../config/database');

const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

module.exports = (app) => {

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
        db.all('SELECT * FROM livros', function(erro, resultados) {
            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultados
                }
            );
        });
        
    });
}