const collectionName = 'drivers';

const setDriver = (req) => {
    return new Promise((resolve, reject) => {
        db.collection(collectionName).insertOne(req, (err,res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

const getFullNameDrivers = () => {
    return new Promise((resolve, reject) => {
        db.collection(collectionName).find({}, {projection:{_id:1,firstName:1,lastName:1}}).toArray((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

const getBirthdayDrivers = () => {
    return new Promise((resolve, reject) => {
        db.collection(collectionName).find({}, {projection:{_id:1,birthday:1}}).toArray((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

const getPositionDrivers = () => {
    return new Promise((resolve, reject) => {
        db.collection(collectionName).find({}, {projection:{_id:1,position:1}}).toArray((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

const getFullNameBirthdayDrivers = () => {
    return new Promise((resolve, reject) => {
        db.collection(collectionName).find({}, {projection:{_id:1,firstName:1,lastName:1,birthday:1}}).toArray((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

const getFullNamePositionDrivers = () => {
    return new Promise((resolve, reject) => {
        db.collection(collectionName).find({}, {projection:{_id:1,firstName:1,lastName:1,position:1}}).toArray((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

const getBirthdayPositionDrivers = () => {
    return new Promise((resolve, reject) => {
        db.collection(collectionName).find({}, {projection:{_id:1,birthday:1,position:1}}).toArray((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};


const getDrivers = () => {
    return new Promise((resolve, reject) => {
        db.collection(collectionName).find().toArray((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

module.exports = {
    setDriver,
    getFullNameDrivers,
    getBirthdayDrivers,
    getPositionDrivers,
    getFullNameBirthdayDrivers,
    getFullNamePositionDrivers,
    getBirthdayPositionDrivers,
    getDrivers
}
