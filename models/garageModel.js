const AgroModel = require('./agroModel');
const {ObjectID} = require('mongodb');
const db = require('../dbConnect');

class GarageModel extends AgroModel {
    constructor(collectionName) {
        super(collectionName);
    }


    async updateGarage(carId, garageId) {
        return await db.getDb().collection(this.collectionName)
        .findOneAndUpdate({_id: new ObjectID(garageId)}, {$push: {carsId: carId}},{returnOriginal: false});
            
    }
}

module.exports = GarageModel;