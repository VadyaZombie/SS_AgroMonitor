const checkFilter = () => {
    return (req, res, next) => {
        if (req.query['firstname']) {
            next('route');
        } else if (req.query['square']) {
            next('route');
        } else if (req.query['cur_cap']) {
            next('route');
        } else {
            next();
        }
    };
};

module.exports = {
    checkFilter
};