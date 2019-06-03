import Sequelize, { Model } from 'sequelize';

class role extends Model {
}

const schema = {
  role_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  role_name: Sequelize.STRING,
  desc: Sequelize.STRING
};

export default (sequelize) => {
  role.init(schema, {
    sequelize,
    tableName: 'role',
  });

  return role;
};
