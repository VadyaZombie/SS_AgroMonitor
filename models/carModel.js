const AgroModel = require('./agroModel');
const {ObjectID} = require('mongodb');
const db = require('../dbConnect');

class CarModel extends AgroModel {
    constructor(collectionName) {
        super(collectionName);
    }

    async findFreeCar() {
        return await db.getDb().collection(this.collectionName).findOne({driverId: ""});
    }

    async checkDriver(driverId){
        let result = await db.getDb().collection(this.collectionName).findOne({driverId: driverId});
        await console.log(result);
        return await result;
    }

    async unloadCar(id){
        return await db.getDb().collection(this.collectionName).findOneAndUpdate({_id: new ObjectID(id)}, {$set: {"curCap" : 0}}, {returnOriginal: false});
    }

    async removeDriver(id){
        return await db.getDb().collection(this.collectionName).findOneAndUpdate({_id: new ObjectID(id)}, {$set: {"driverId" : ""}}, {returnOriginal: false});
    }
}

module.exports = CarModel;