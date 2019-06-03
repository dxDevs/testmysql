import Sequelize from 'sequelize';

const sequelize = new Sequelize('dbname', 'id', 'pw', 
{ 
    host: 'ip',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

export default sequelize;
