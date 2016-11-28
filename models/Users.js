module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
      classMethods: {
        associate: function(models) {
          User.hasOne(models.profile);
          User.hasMany(models.messages);
        }
      }
  });
  return User;
};
