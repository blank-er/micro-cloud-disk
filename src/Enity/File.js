const {Model,Sequelize} = require("sequelize")
const sequelize = require("./ConnManager")
class file extends Model {}

module.exports = file.init(
    {
        id:{
            type : new Sequelize.INTEGER(),
            autoIncrement: true,
            primaryKey: true
        },
        lastName:{
            type: new Sequelize.STRING(),
            allowNull: false
        },
        hashName:{
            type: new Sequelize.STRING(),
            allowNull: false
        },
        size:{
            type : new Sequelize.INTEGER(),
            allowNull: false
        },
        type:{
            type: new Sequelize.STRING(),
            allowNull: false
        },
        lastTime:{
            type: new Sequelize.STRING(),
            allowNull: false
        },
        dlTimes:{
            type : new Sequelize.INTEGER(),
            allowNull: false
        },
        uid:{
            type : new Sequelize.INTEGER(),
            allowNull: false
        }
    },{
        sequelize,
        timestamps: false,
    }
);