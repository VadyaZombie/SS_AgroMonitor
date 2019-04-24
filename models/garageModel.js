const AgroModel = require('./agroModel');
const {ObjectID} = require('mongodb');
const db = require('../dbConnect');

class GarageModel extends AgroModel {
    constructor(collectinName) {
        super(collectinName);
    }

    async addElementInDocumentArray(id, content){
        return await db.getDb().collection(this.collectionName).findOneAndUpdate({_id: new ObjectID(id)}, {$push: {"carsId" : content}}, {returnOriginal: false});
    }

    async getFreeGarage(){
        return await db.getDb().collection(this.collectionName).findOne({ "$where": "this.curCap != this. maxCap" },{ "curCap": 1, "maxCap": 1 } );
    }

    async addCarToGarage(){
        return await true;
    }
}

module.exports = GarageModel;