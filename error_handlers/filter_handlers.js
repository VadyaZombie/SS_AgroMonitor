const checkFilter = () => {
    return (req, res, next) => {
        if (req.query['firstname']) {
            next('route');
        } else {
            next();
        }
    };
};

module.exports = {
    checkFilter
};
