'use strict'

const mongoose = require('mongoose');
var model;

class ClienteController {

    constructor(app) {

        app.get('/clientes', this.findAll)
        app.get('/clientes/:id', this.findOne)
        app.post('/clientes', this.create)
        app.put('/clientes/:id', this.update)
        app.delete('/clientes/:id', this.delete)
        
        //this.model recebe o acesso a colletion no banco de dados
       model = mongoose.model('Cliente')
        
    
    }

    async findAll (req,res) {
       res.json(await model.find());
    }
    async findOne (req, res){
        let id = req.params.id;
        res.json(await model.findById(id));
    }
    async create(req,res){
        let cliente = req.body;
        res.json(await model.create(cliente));

    }
    async update(req,res){
        let _id = req.params.id;
        res.json(await model.findOneAndUpdate({ _id }, req.body));
    }
    async delete(req, res){
        let _id = req.param._id;
        res.json(await model.findOneAndRemove({ _id }, req.body));
    }
    
}
module.exports = ClienteController;