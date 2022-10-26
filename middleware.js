exports.requireLogin = (req, res, next) => {
    // iff session = OK & user = OK, login, if not: redirect to login page
    if (req.session && req.session.user) {
        return next();

    }
    else {
        return res.redirect('/login')
    }
}