module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });
  return User;
};
