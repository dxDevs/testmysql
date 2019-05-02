import Sequelize from 'sequelize';

const sequelize = new Sequelize('db', 'user', 'pw', 
{ 
    host: 'ip',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

export default sequelize;
