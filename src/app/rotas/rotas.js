const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();

const { check } = require('express-validator/check');

module.exports = (app) => {

    app.get('/', baseControlador.home());

    app.get('/livros', livroControlador.lista());

    app.get('/livros/form', livroControlador.formularioCadastro());

    app.post('/livros', [
        check('titulo').isLength({ min: 5 }).withMessage("O título precisa ter no mínimo 5 caracteres!"),
        check('preco').isCurrency().withMessage("O preço precisa ter um valor monetário válido!")
        ],        
        livroControlador.cadastra()
    );

    app.delete('/livros/:id', livroControlador.remove());

    app.get('/livros/form/:id', livroControlador.formularioEdicao());

    app.put('/livros', livroControlador.edita());
}