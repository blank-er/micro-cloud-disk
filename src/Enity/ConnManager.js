const Sequelize = require("sequelize")

let sequelize = undefined;

if(!sequelize){
    sequelize = new Sequelize('pan', 'root', 'HMM13865496438', {
        host: 'localhost',
        dialect: 'mysql',
    });
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
        })
        .catch(err => {
            console.log('Unable to connect to the database', err)
        });
}


module.exports = sequelize;