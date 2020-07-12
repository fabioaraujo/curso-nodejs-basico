class LivroDao {

    constructor(db) {
        this._db = db;
    }

    lista(callback) {
        this._db.all(
            'SELECT * FROM livros',
            (erro, resultados) =>
                callback(erro, resultados)
                /* 
                a arrow function acima é o mesmo que a declaração abaixo
            function(erro, resultados) {
                callback(erro, resultados);
            }     
            */   
        )

    }

}

module.exports = LivroDao;
