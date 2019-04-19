const AgroModel = require('../models/agroModel');

class AgroService {
    constructor(collectionName) {
        this.collectionName = collectionName;

        this.agroModel = new AgroModel(collectionName);

    }

    async createDocument(content) {
        return await this.agroModel.createDocument(content);
    }

    async getAllDocument() {
        return await this.agroModel.getAllDocument();
    }

    async getDocumentById(id) {
        return await this.agroModel.getDocumentById(id);
    }

    async getDocumentByFilter(filter) {
        return await this.agroModel.getDocumentByFilter(filter);
    }

    async updateDocument(id, content) {
        return await this.agroModel.updateDocument(id, content);
    }

    async deleteDocument(id) {
        return await this.agroModel.deleteDocument(id);
    }
}

module.exports = AgroService;