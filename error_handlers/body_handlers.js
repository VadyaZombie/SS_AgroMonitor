const err = require('./error_generators');

const checkBody = () => {
    return (req, res, next) => {
        for (let value of Object.values(req.body)) {
            if (!value) {
                next(err.generateError('Body value is empty', 400));
            } else if (typeof value !== 'string') {
                next(err.generateError('Body value isn\'t a string', 400));
            }
        }
        next();
    };
};

module.exports = {
    checkBody
};