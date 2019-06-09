/* eslint-disable new-cap */

module.exports = function(sequelize, DataTypes) {
    const domains = sequelize.define('virtual_domains', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        indexes: [{ unique: true, fields: ['name'] }],
    });

    return domains;
};
