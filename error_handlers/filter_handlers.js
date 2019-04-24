const err = require('./error_generators');

const checkFilter = () => {
    return (req, res, next) => { 
        if (req.query) {
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