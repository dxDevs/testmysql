import Sequelize, { Model } from 'sequelize';

class restaurant extends Model {
}

const schema = {
  restaurant_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  restaurant_name: Sequelize.STRING,
  food_type: Sequelize.INTEGER,
  no_smokin_area: Sequelize.INTEGER
};

export default (sequelize) => {
  restaurant.init(schema, {
    sequelize,
    tableName: 'restaurant',
  });

  return restaurant;
};
