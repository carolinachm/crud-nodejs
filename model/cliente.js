'use strict'
const mongoose = require('mongoose');

class Cliente{
    constructor(){
        mongoose.model('Cliente',{
            nome: String,
            email: String,
            cep:String,
            rua:String,
        });
    }
}
module.exports = Cliente;
