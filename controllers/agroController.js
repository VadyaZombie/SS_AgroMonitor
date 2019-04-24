const AgroService = require('../services/agroService');

class AgroController {
    constructor(collectionName) {

        this.agroService = new AgroService(collectionName);

        this.createDocument = this.createDocument.bind(this);
        this.getAllDocument = this.getAllDocument.bind(this);
        this.getDocumentById = this.getDocumentById.bind(this);
        this.getDocumentByFilter = this.getDocumentByFilter.bind(this);
        this.updateDocument = this.updateDocument.bind(this);
        this.deleteDocument = this.deleteDocument.bind(this);
    }

    async createDocument(req, res) {
        const result = await this.agroService.createDocument(req.body);
        res.status(201).json(result.ops[0]);
    }

     async getAllDocument (req, res) {
        const result = await this.agroService.getAllDocument();
        if(result.length){
            res.status(200).json(result);
        } else {
            res.status(200).json(result);
        }
    }

    async getDocumentById(req, res) {
        const result = await this.agroService.getDocumentById(req.params['id']);
        if(result){
            res.status(200).json(result);
        } else {
            res.status(404).send('ID doesn\'t exist');
        }
    }

    async getDocumentByFilter(req, res) {
        const result = await this.agroService.getDocumentByFilter(req.query);
        res.status(200).json(result);
    }

    async updateDocument(req, res) {
        const result = await this.agroService.updateDocument(req.params['id'], req.body);
        if(result['value']){
            res.status(200).json(result['value']);
        } else {
            res.status(404).send('ID doesn\'t exist');
        }
    }

    async deleteDocument(req, res) {
        let result = await this.agroService.deleteDocument(req.params['id']);
        const {n: delNumber} = result['result'];        
        if(delNumber){
            result = await this.agroService.getAllDocument();
            res.status(200).json(result);
        } else {
            res.status(404).send('ID doesn\'t exist');
        }
    }
}

module.exports = AgroController;