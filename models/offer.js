import Sequelize, { Model } from 'sequelize';

class offer extends Model {
}

const schema = {
  offer_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  offer_name: Sequelize.STRING,
  offer_area: Sequelize.STRING,
  time_created: Sequelize.STRING,
  acrivate_from: Sequelize.STRING,
  activate_to: Sequelize.STRING,
  keyward: Sequelize.STRING,
  description: Sequelize.STRING,
};

export default (sequelize) => {
  offer.init(schema, {
    sequelize,
    tableName: 'offer',
  });

  return offer;
};
