import Sequelize from 'sequelize';

const sequelize = new Sequelize('database', 'user', 'pw', 
{ 
    host: 'ip',
    dialect: 'mysql' 
})

export default sequelize;
