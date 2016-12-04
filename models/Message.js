module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('messages', {
    content: DataTypes.STRING
  });
  return Message;
};
