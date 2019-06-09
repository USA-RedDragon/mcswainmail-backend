/* eslint-disable new-cap */

const argon2 = require('argon2');

module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define('virtual_users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(120),
            unique: { msg: 'Email address already in use.' },
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        indexes: [{ unique: true, fields: ['email'] }],
        hooks: {
            beforeSave: (user) => {
                if (user.changed('password')) {
                    return argon2.hash(user.password).then((hash) => {
                        user.password = hash;
                    });
                }
            },
        },
    });

    users.associate = function(models) {
        models.virtual_users.belongsTo(
            models.virtual_domains, {
                foreignKey: {
                    name: 'domain_id',
                    allowNull: false,
                },
            }
        );
    };

    return users;
};
