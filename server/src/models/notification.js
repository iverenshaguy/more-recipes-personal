export default (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    notification: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'This is a required field'
      },
      validate: {
        is: {
          args: /^[a-zA-Z0-9\s]*$/,
          msg: 'Input is not valid'
        },
        notEmpty: {
          args: true,
          msg: 'Input cannot be empty'
        }
      }
    },
    userId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER
    },
  });
  Notification.associate = (models) => {
    Notification.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Notification;
};
