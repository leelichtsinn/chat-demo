module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasOne(models.profiles);
        User.hasMany(models.messages);
      }
    }
  });
  return User;
};
