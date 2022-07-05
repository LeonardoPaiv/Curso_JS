exports.middleGlobal = (req, res, next) => {
    next();
};

exports.checkErrorCsft = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        res.render('404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};