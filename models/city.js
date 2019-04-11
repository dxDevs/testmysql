import Sequelize, { Model } from 'sequelize';

class city extends Model {
    constructor(tableName)
    {
      super(tableName, tableName);
      this.tableName = 'city';
    }
}

const schema = {
  city_id: Sequelize.INTEGER,
  city_name: Sequelize.STRING,
  country_id: Sequelize.INTEGER
};

export default (sequelize) => {
  city.init(schema, {
    sequelize,
    tableName: city.tableName,
  });

  return city;
};
