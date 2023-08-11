const { DataTypes } = require("sequelize");

module.exports = (Sequelize, sequelize) => {
  const accessParameter = sequelize.define(
    "accessParameter",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      effectiveDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      UserIdLength: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PasswordLength: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      NumericCharacters: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AlphaCharacters: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      forceChangePasswordInterval: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      preventPreviousPasswordUsage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      warningAfterUnsuccessfulLogins: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      warningToAdminAfterUnsuccessfulLogins: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lockUserIdAfterUnsuccessfulAttempts: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxUserSessions: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxConcurrentSessions: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lockTerminalAfterSeconds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "accessparameters",
    }
  );
  return accessParameter;
};
