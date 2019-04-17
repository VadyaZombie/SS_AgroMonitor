const {ObjectID} = require('mongodb');
const {driversCollection} = require('../config');
const {getCurDb} = require('../dbConnect');

const createDriver = async (content) => {
    return await getCurDb().collection(driversCollection).insertOne(content);
};

const getDrivers = async () => {
    return await getCurDb().collection(driversCollection).find().toArray();
};

const getDriverById = async (id) => {
    return await getCurDb().collection(driversCollection).findOne({_id: new ObjectID(id)});
};

const getDriversByFirstname = async (driverFirstname) => {
    return await getCurDb().collection(driversCollection).find({firstname: driverFirstname}).toArray();
};

const updatePartialDriver = async (id, content) => {
    return await getCurDb().collection(driversCollection).findOneAndUpdate({_id: new ObjectID(id)}, {$set: content}, {returnOriginal: false});
};

const updateDriver = async (id, content) => {
    return await getCurDb().collection(driversCollection).findOneAndUpdate({_id: new ObjectID(id)}, {$set: content}, {returnOriginal: false});
};

const deleteDriver = async (id) => {
    await getCurDb().collection(driversCollection).deleteOne({_id: new ObjectID(id)});
    return await getCurDb().collection(driversCollection).find().toArray();
};

module.exports = {
    createDriver,
    getDrivers,
    getDriverById,
    getDriversByFirstname,
    updatePartialDriver,
    updateDriver,
    deleteDriver
};