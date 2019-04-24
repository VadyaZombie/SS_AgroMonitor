const AgroModel = require('./agroModel');
const {ObjectID} = require('mongodb');
const db = require('../dbConnect');

class DriverModel extends AgroModel {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = DriverModel;

