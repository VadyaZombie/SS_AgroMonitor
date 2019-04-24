const err = require('./error_generators');

const checkFilter = () => {
    return (req, res, next) => { 
        if (req.query) {
            next('route');
        } else {
            next();
        }
    };
};

module.exports = {
    checkFilter
};
