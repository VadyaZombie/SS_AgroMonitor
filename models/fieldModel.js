const AgroModel = require('./agroModel');
const {ObjectID} = require('mongodb');
const db = require('../dbConnect');

class FieldModel extends AgroModel {
    constructor(collectionName) {
        super(collectionName);
    }

    async addElementInDocumentArray(id, content){
        return await db.getDb().collection(this.collectionName).findOneAndUpdate({_id: new ObjectID(id)}, {$push: {"drivers" : content}}, {returnOriginal: false});
    }
    
    async removeDriverFromField(fieldId, driverId){
        return await db.getDb().collection(this.collectionName).update({_id : new ObjectID(fieldId)}, {"$pull" : {"drivers" : driverId} });
    }
}

module.exports = FieldModel;