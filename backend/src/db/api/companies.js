const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class CompaniesDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const companies = await db.companies.create(
      {
        id: data.id || undefined,

        companyName: data.companyName || null,
        ruc: data.ruc || null,
        razonSocial: data.razonSocial || null,
        address: data.address || null,
        phones: data.phones || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await companies.setContanctos(data.contanctos || [], {
      transaction,
    });

    return companies;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const companiesData = data.map((item, index) => ({
      id: item.id || undefined,

      companyName: item.companyName || null,
      ruc: item.ruc || null,
      razonSocial: item.razonSocial || null,
      address: item.address || null,
      phones: item.phones || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const companies = await db.companies.bulkCreate(companiesData, {
      transaction,
    });

    // For each item created, replace relation files

    return companies;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const companies = await db.companies.findByPk(id, {}, { transaction });

    await companies.update(
      {
        companyName: data.companyName || null,
        ruc: data.ruc || null,
        razonSocial: data.razonSocial || null,
        address: data.address || null,
        phones: data.phones || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await companies.setContanctos(data.contanctos || [], {
      transaction,
    });

    return companies;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const companies = await db.companies.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of companies) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of companies) {
        await record.destroy({ transaction });
      }
    });

    return companies;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const companies = await db.companies.findByPk(id, options);

    await companies.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await companies.destroy({
      transaction,
    });

    return companies;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const companies = await db.companies.findOne({ where }, { transaction });

    if (!companies) {
      return companies;
    }

    const output = companies.get({ plain: true });

    output.contanctos = await companies.getContanctos({
      transaction,
    });

    return output;
  }

  static async findAll(filter, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.contacts,
        as: 'contanctos',
        through: filter.contanctos
          ? {
              where: {
                [Op.or]: filter.contanctos.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.contanctos ? true : null,
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.companyName) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('companies', 'companyName', filter.companyName),
        };
      }

      if (filter.ruc) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('companies', 'ruc', filter.ruc),
        };
      }

      if (filter.razonSocial) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('companies', 'razonSocial', filter.razonSocial),
        };
      }

      if (filter.address) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('companies', 'address', filter.address),
        };
      }

      if (filter.phones) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('companies', 'phones', filter.phones),
        };
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.companies.count({
            where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.companies.findAndCountAll({
          where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('companies', 'id', query),
        ],
      };
    }

    const records = await db.companies.findAll({
      attributes: ['id', 'id'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['id', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }
};
