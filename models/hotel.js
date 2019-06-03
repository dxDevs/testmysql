import Sequelize, { Model } from 'sequelize';

class hotel extends Model {
}

const schema = {
  hotel_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  hotel_name: Sequelize.STRING,
  number_room: Sequelize.STRING,
  //picture: Sequelize.STRING,
  price: Sequelize.INTEGER,
  rating: Sequelize.INTEGER,
  city_id: Sequelize.INTEGER,
};

export default (sequelize) => {
  hotel.init(schema, {
    sequelize,
    tableName: 'hotel',
  });

  return hotel;
};
