const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const companies = sequelize.define(
    'companies',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      companyName: {
        type: DataTypes.TEXT,
      },

      ruc: {
        type: DataTypes.TEXT,
      },

      razonSocial: {
        type: DataTypes.TEXT,
      },

      address: {
        type: DataTypes.TEXT,
      },

      phones: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  companies.associate = (db) => {
    db.companies.belongsToMany(db.contacts, {
      as: 'contanctos',
      foreignKey: {
        name: 'companies_contanctosId',
      },
      constraints: false,
      through: 'companiesContanctosContacts',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.companies.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.companies.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return companies;
};
