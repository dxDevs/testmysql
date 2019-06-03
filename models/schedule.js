import Sequelize, { Model } from 'sequelize';

class schedule extends Model {
}

const schema = {
  schedule_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  schedule_day: Sequelize.STRING,
  offer_id: Sequelize.INTEGER,
  city_id: Sequelize.INTEGER
};

export default (sequelize) => {
  schedule.init(schema, {
    sequelize,
    tableName: 'schedule',
  });

  return schedule;
};
