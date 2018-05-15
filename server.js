'use strict'
//importar o express, para importar iremos usar o require, guardar dentro de uma constante
const Express = require('express');
//importante o mongoose
const mongoose = require('mongoose');
//importar body-parse
const bodyParser = require('body-parser')
//importando os models
const Cliente = require('./model/cliente');
//importando as controller
const ClienteController = require('./controller/clienteController');



class Server {
    // para construtor funcionar vc tem que instanciar a classe server
    constructor() {

        //instaciar o express,framework que fica mapeamento requisicao http
        this.app = new Express();
        //configuração do body-parse
        // support parsing of application/json type post data
        this.app.use(bodyParser.json());

        //support parsing of application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: true }));
        //conectar com banco de dados
        mongoose.connect('mongodb://mongo:mongo@ds223760.mlab.com:23760/crud');

        //registrar os Models(Collections)
        new Cliente();

        //instanciar o cliente
        this.clienteController = new ClienteController(this.app);

        //ficar escutando a porta que o servidor esta rodando
        this.app.listen(3000, () => {
            console.log('Servidor rodando na port 3000!');
        })

    }
}
//instanciando a classe Server
new Server();

