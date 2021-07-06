const Sequelize = require("sequelize")

const connection = new Sequelize('minhasperguntas','root','1732',{
    host:'localhost',
    dialect: 'mysql'
})

module.exports = connection