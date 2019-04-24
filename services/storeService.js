const AgroService = require('./agroService');

const StoreModel = require('../models/storeModel');

class StoreService extends AgroService {
    constructor(collectionName) {
        super(collectionName);

        this.storeModel = new StoreModel(collectionName);
    }

    async getFreeStore(amount) {
        let stores = await this.storeModel.getFreeStore(amount);
        for(let store of stores){
            if (store.curCap < (store.maxCap - amount)){
                return await store['_id'];
            }
        }
        //метод для добавления экстра склада!!
    }

    async addToStore(id, amount){
        return await this.storeModel.addToCap(id, amount);
    }
}

module.exports = StoreService;