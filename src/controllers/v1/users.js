const argon2 = require('argon2');

module.exports.GETApiUsersMe = (req, res) => {
    const user = req.user;
    delete user.password;
    delete user.id;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.domain_id;
    res.json(user);
};

module.exports.PUTApiUsersMe = (req, res) => {
    argon2.verify(req.user.password, req.body.currentPassword).then((verified) => {
        if (!verified) {
            return res.status(400).json({ message: 'Current password does not match' });
        } else {
            req.db.virtual_users.findByPk(req.user.id).then((user) => {
                user.update({
                    password: req.body.newPassword,
                }, {
                    where: { id: req.user.id },
                }).then(() => {
                    return res.sendStatus(204);
                }).catch((error) => {
                    console.log(error);
                    return res.status(500).json({ message: 'Error' });
                });
            }).catch((error) => {
                console.log(error);
                return res.status(500).json({ message: 'Error' });
            });
        }
    }).catch((error) => {
        console.log(error);
        return res.status(500).json({ message: 'Error' });
    });
};
