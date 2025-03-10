"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Atividade extends Model {
    static associate(models) {
      Atividade.belongsTo(models.Viagem, {
        foreignKey: "viagemId",
        as: "viagem",
      });
    }
  }

  Atividade.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      dataAtividade: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      viagemId: {
        type: DataTypes.INTEGER,
        references: {
          model: "viagens",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Atividades",
      tableName: "atividades",
    }
  );

  return Atividade;
};
