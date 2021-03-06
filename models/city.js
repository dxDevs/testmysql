import Sequelize, { Model } from 'sequelize';

class city extends Model {
}

const schema = {
  city_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  city_name: Sequelize.STRING,
  country_id: Sequelize.INTEGER
};

export default (sequelize) => {
  city.init(schema, {
    sequelize,
    tableName: 'city',
  });

  return city;
};
