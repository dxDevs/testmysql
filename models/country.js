import Sequelize, { Model } from 'sequelize';

class country extends Model {
}

const schema = {
  country_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  country_name: Sequelize.STRING,
  country_region: Sequelize.STRING,
  language: Sequelize.STRING
};

export default (sequelize) => {
  country.init(schema, {
    sequelize,
    tableName: 'country',
  });

  return country;
};
