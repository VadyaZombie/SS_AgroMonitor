const err = require('./error_generators');

const patterns = {
    drivers: {
        firstname: 'string',
        lastname: 'string',
        birthday: 'string',
        position: 'string'
    },
    fields: {

    },
    cars: {

    },
    garages: {

    },
    stores: {

    }
}

const isEmptyCheck = (body, next) => {
    for (value of Object.keys(body)) {
        if (!body[value]) {
            next(err.generateError(`Body value ${value} is empty`, 400));
            return false;
        }
    }
    return true;
};

const paramsAmountCheck = (body, curPattern, next) => {
    if (Object.keys(body).length !==Object.keys(curPattern).length) {
        next(err.generateError('Wrong parameters amount', 400));
        return false;
    }
    return true;
};

const checkBodyContent = (body, curPattern, next) => {
    for (let value of Object.keys(body)) {
        if (value in curPattern) {
            if (typeof (body[value]) !== curPattern[value]) {
                next(err.generateError(`Wrong type of '${value}' param, type should be '${curPattern[value]}'`, 400));
                return false;
            }
        } else {
            next(err.generateError(`Wrong parameter name`), 400);
            return false;
        }
    }
    return true;
};

const checkBody = (collectionName) => {
    let curPattern = patterns[collectionName];
    return (req, res, next) => {
        if (paramsAmountCheck(req.body, curPattern, next)) {
            if (isEmptyCheck(req.body, next)) {
                if (checkBodyContent(req.body, curPattern, next)) {
                    next();
                }
            }
        }
    }
};

module.exports = {
    checkBody
};