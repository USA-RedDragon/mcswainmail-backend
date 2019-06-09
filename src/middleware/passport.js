const passport = require('passport');
const argon2 = require('argon2');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../db/models');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
        done(null, user.get());
    });

    passport.deserializeUser(function(user, done) {
        models.virtual_users.findByPk(user.id).then((user) => {
            if (user) {
                done(null, user.get());
            } else {
                done(new Error('No User Found'), null);
            }
        }).catch((err) => {
            done(err, null);
        });
    });

    passport.use(
        new LocalStrategy({
            usernameField: 'email',
        },
        (email, password, done) => {
            models.virtual_users.findOne({ where: { email: email } }).then((user) => {
                if (!user) {
                    return done(null, false);
                }

                return argon2.verify(user.password, password).then((isValid) => {
                    if (!isValid) {
                        return done(null, false);
                    }
                    return done(null, user);
                });
            }).catch((err) => {
                if (err) {
                    return done(err);
                }
            });
        }
        )
    );
};
