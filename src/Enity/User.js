const {Model,Sequelize} = require("sequelize")
const sequelize = require("./ConnManager")
class user extends Model {}

module.exports = user.init(
    {
        id:{
            type : new Sequelize.INTEGER(),
            autoIncrement: true,
            primaryKey: true
        },
        username:{
            type: new Sequelize.STRING(),
            allowNull: false
        },
        password:{
            type: new Sequelize.STRING(),
            allowNull: false
        },
    },{
        sequelize,
        timestamps: false,
    }
);