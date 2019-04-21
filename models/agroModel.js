const {ObjectID} = require('mongodb');
const db = require('../dbConnect');

class AgroModel {
    constructor(collectionName) {
        this.collectionName = collectionName;
    }
    
    async createDocument(content) {
        return await db.getDb().collection(this.collectionName).insertOne(content);
    }

    async getAllDocument () {
        return await db.getDb().collection(this.collectionName).find().toArray();
    }

    async getDocumentById(id){
        return await db.getDb().collection(this.collectionName).findOne({_id: new ObjectID(id)});
    }

    async getDocumentByFilter(filter) {
        return await db.getDb().collection(this.collectionName).find(filter).toArray();
    }

    async updateDocument(id, content) {
        return await db.getDb().collection(this.collectionName).findOneAndUpdate({_id: new ObjectID(id)}, {$set: content}, {returnOriginal: false});
    }

    async deleteDocument(id){
        await db.getDb().collection(this.collectionName).deleteOne({_id: new ObjectID(id)});
        return await db.getDb().collection(this.collectionName).find().toArray();
    }
}

module.exports = AgroModel;