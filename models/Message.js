module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('messages', {
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Message.belongsTo(models.users, {
          onDelete: 'CASCADE',
          foreignKey: {
            allNull: false
          }
        });
      }
    }
  });
  return Message;
};
