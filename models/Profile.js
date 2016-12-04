module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('profiles', {
    bio: DataTypes.TEXT
  });
  return Profile;
};
