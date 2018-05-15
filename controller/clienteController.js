'use strict'

const mongoose = require('mongoose');
var model;

class ClienteController {

    constructor(app) {

        app.get('/clientes', this.findAll)
        app.post('/clientes', this.create)
        app.put('/clientes', this.update)
        app.delete('/clientes', this.remove)
        //this.model recebe o acesso a colletion no banco de dados
       model = mongoose.model('Cliente')
        
    
    }

    async findAll (req,res) {
       res.json(await model.find());
    }
    async create(req,res){
        let cliente = req.body;
        res.json(await model.create(cliente));

    }
    async update(req,res){
        let cliente = req.body;
        res.json(await model.update({_id: cliente._id, cliente}));
    }
    async delete(req, res){
        let id = req.body._id;
        res.json(await model.remove({_id:id}));
    }
}
module.exports = ClienteController;