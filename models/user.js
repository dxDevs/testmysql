import Sequelize, { Model } from 'sequelize';

class user extends Model {
}

const schema = {
  user_id: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  user_name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone_number: Sequelize.STRING,
  role_id: Sequelize.STRING
};

export default (sequelize) => {
  user.init(schema, {
    sequelize,
    tableName: 'user',
  });

  return user;
};
