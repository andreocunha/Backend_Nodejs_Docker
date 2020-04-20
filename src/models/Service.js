const { Model, DataTypes } = require('sequelize');

class Service extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.DOUBLE,
            rg: DataTypes.DOUBLE,
            endereco: DataTypes.STRING,
            profissao: DataTypes.STRING,
            celular: DataTypes.DOUBLE,
            forma_pagamento: DataTypes.STRING,
            email: DataTypes.STRING,
            data_nascimento: DataTypes.DOUBLE,
            sexo: DataTypes.STRING,
            descricao: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Service;