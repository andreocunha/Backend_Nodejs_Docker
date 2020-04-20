const Service = require('../models/Service');

module.exports = {
    async index(req, res){
        const services = await Service.findAll();

        return res.json(services);
    },

    async store(req, res){
        const { nome, cpf, rg, endereco, profissao, celular, forma_pagamento, email, data_nascimento, sexo, descricao } = req.body;

        const service = await Service.create({ nome, cpf, rg, endereco, profissao, celular, forma_pagamento, email, data_nascimento, sexo, descricao });

        return res.json(service);
    }
};

