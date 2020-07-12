const db = require('../../config/database');

const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const LivroDao = require('../infra/livro-dao');

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
        const livroDao = new LivroDao(db);
        livroDao.lista().then(livros => resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: livros
            }

        ))
        .catch(erro => console.log(erro));
        
    });
}