import Sequelize, { Model } from 'sequelize';

class air extends Model {
}

const schema = {
  flight_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  airlines_name: Sequelize.STRING,
  arrival_city: Sequelize.STRING,
  departure_city: Sequelize.STRING,
  price: Sequelize.INTEGER,
  departure_date: Sequelize.STRING,
  return_date: Sequelize.STRING
};

export default (sequelize) => {
  air.init(schema, {
    sequelize,
    tableName: 'flight',
  });

  return air;
};
