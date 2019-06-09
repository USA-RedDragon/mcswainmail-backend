module.exports.POSTApiAuthLogin = (req, res) => {
    res.status(200).send();
};

module.exports.GETApiAuthLogout = (req, res) => {
    res.clearCookie('connect.sid');
    req.logOut();
    req.session.destroy((err) => {
        res.status(200).send();
    });
};
