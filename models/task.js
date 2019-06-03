import Sequelize, { Model } from 'sequelize';

class task extends Model {
}

const schema = {
  task_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  task_type: Sequelize.INTEGER,
  dscription: Sequelize.STRING,
  start_time: Sequelize.STRING,
  end_time: Sequelize.STRING,
  schedule_id: Sequelize.INTEGER
};

export default (sequelize) => {
  task.init(schema, {
    sequelize,
    tableName: 'task',
  });

  return task;
};
