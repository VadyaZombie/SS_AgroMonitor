const err = require('./error_generators');

const checkBody = () => {
    return (req, res, next) => {
        // for (let value of Object.values(req.body)) {
        //     if (!value) {
        //         next(err.generateError('Body value is empty', 400));
        //     }
        // }
        next();
    };
};

const checkCarId = () => {
    return (req, res, next) => {
        const regex = /^[a-z0-9]{24}$/;

        if(Object.keys(req.body).length > 1) {
            next(err.generateError('Many properties, only 1 property - carId', 400));
        } else if(Object.keys(req.body)[0] !== 'carId') {
            next(err.generateError('Property must be carId', 400)) ;           
        } else if(typeof req.body['carId'] !== 'string') {
            next(err.generateError('Property carId isn\'t a string', 400));           
        } else if(!regex.test(req.body['carId'])) {
            next(err.generateError('Property carId must be consist 24 lowercase characters', 400));           
        } else {
            next();
        }
    };
};

const checkGarageId = () => {
    return (req, res, next) => {
        const regex = /^[a-z0-9]{24}$/;

        if(Object.keys(req.body).length > 1) {
            next(err.generateError('Many properties, only 1 property - garageId', 400));
        } else if(Object.keys(req.body)[0] !== 'garageId') {
            next(err.generateError('Property must be garageId', 400)) ;           
        } else if(typeof req.body['garageId'] !== 'string') {
            next(err.generateError('Property garageId isn\'t a string', 400));           
        } else if(!regex.test(req.body['garageId'])) {
            next(err.generateError('Property garageId must be consist 24 lowercase characters', 400));           
        } else {
            next();
        }
    };
};


const checkStoreId = () => {
    return (req, res, next) => {
        const regex = /^[a-z0-9]{24}$/;

        if(Object.keys(req.body).length > 1) {
            next(err.generateError('Many properties, only 1 property - storeId', 400));
        } else if(Object.keys(req.body)[0] !== 'storeId') {
            next(err.generateError('Property must be storeId', 400)) ;           
        } else if(typeof req.body['storeId'] !== 'string') {
            next(err.generateError('Property storeId isn\'t a string', 400));           
        } else if(!regex.test(req.body['storeId'])) {
            next(err.generateError('Property garageId must be consist 24 lowercase characters', 400));           
        } else {
            next();
        }
    };
};


module.exports = {
    checkBody,
    checkCarId,
    checkGarageId,
    checkStoreId
};