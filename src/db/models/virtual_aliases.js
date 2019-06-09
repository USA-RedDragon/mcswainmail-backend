/* eslint-disable new-cap */

module.exports = function(sequelize, DataTypes) {
    const aliases = sequelize.define('virtual_aliases', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        source: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        indexes: [{ unique: true, fields: ['source'] }],
    });

    aliases.associate = function(models) {
        models.virtual_aliases.belongsTo(
            models.virtual_domains, {
                foreignKey: {
                    name: 'domain_id',
                    allowNull: false,
                },
            }
        );
    };

    return aliases;
};
