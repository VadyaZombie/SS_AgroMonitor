const AgroService = require('./agroService');

const FieldModel = require('../models/fieldModel');

class FieldService extends AgroService {
    constructor(collectionName) {
        super(collectionName);

        this.fieldModel = new FieldModel(collectionName);
    }

    async subtractProduct(fieldId, amount) {
        let curField = await this.agroModel.getDocumentById(fieldId);
        let contentForUpdate = await {};
        if (amount <= curField.curCap) {
            contentForUpdate = await {
                'curCap': (curField.curCap - amount)
            };
            await this.agroModel.updateDocument(fieldId, contentForUpdate);
            return await amount;
        } else {
            contentForUpdate = await {
                'curCap': 0
            };
            await this.agroModel.updateDocument(fieldId, contentForUpdate);
            return await curField.curCap;
        }
    }

    async removeDriverFromField(fieldId, driverId) {
        return await this.fieldModel.removeDriverFromField(fieldId, driverId);
    }

    async isExist(fieldId) {
        if (await this.agroModel.getDocumentById(fieldId)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = FieldService;