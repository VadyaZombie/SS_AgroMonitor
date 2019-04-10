var collectionName = 'drivers';

const getDrivers = () => {
    return new Promise((resolve, reject) => {
        db.collection(collectionName).find().toArray((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

module.exports = {
    getDrivers
}
