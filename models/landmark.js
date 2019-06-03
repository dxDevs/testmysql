import Sequelize, { Model } from 'sequelize';

class landmark extends Model {
}

const schema = {
  landmark_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  landmark_name: Sequelize.STRING,
  landmark_type: Sequelize.INTEGER,
  //picture: Sequelize.STRING,
  price: Sequelize.INTEGER,
  city_id: Sequelize.INTEGER,
};

export default (sequelize) => {
  landmark.init(schema, {
    sequelize,
    tableName: 'landmark',
  });

  return landmark;
};
