const AgroModel = require('./agroModel');
const {ObjectID} = require('mongodb');
const db = require('../dbConnect');

class StoreModel extends AgroModel {
    constructor(collectionName) {
        super(collectionName);
    }

    async getFreeStore(amount){
        let connect = await db.getDb().collection(this.collectionName);
        let result = await connect.find().toArray();
        return await result;
    }

    async addToCap(id, amount){
       //let result = await db.getDb().collection(this.collectionName).aggregate([{ $project : {_id: new ObjectID(id), curCap : { $add : ["$curCap" , amount]}}}])
        let currStore = await this.getDocumentById(id);
        return await this.updateDocument(id, {"curCap" : currStore.curCap + amount});
    }
}

module.exports = StoreModel;