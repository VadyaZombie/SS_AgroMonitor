const err = require('./error_generators');

const checkFilter = () => {
    return (req, res, next) => { 
        if (req.query) {
            next('route');
        } else if (req.query['maxCap']) {
            next('route');
        } else if (req.query['curCap']) {
            next('route');
        } else {
            next();
        }
    };
};

module.exports = {
    checkFilter
};