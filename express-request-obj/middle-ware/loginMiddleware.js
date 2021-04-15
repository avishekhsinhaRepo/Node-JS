function isValidUser(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body, 'from middle');
    if (username != '' && password != '') {
        next();
    } else {
        res.redirect('/login?msg=fail');
    }
}
module.exports = isValidUser;