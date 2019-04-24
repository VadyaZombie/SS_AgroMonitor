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
    async moveToStore(storeIdFrom, storeIdTo) {
        const storeFrom = await super.getDocumentById(storeIdFrom);
        const storeTo = await super.getDocumentById(storeIdTo);
        let capacity = null;
        

        if(!storeFrom) {
            return 'noStoreFrom';
        } else if(!storeTo) {
            return 'noStoreTo';
        }

        if(storeFrom['curCapacity'] === 0) {
            return 'emptyStoreFrom';
        }

        capacity = storeFrom['curCapacity'] + storeTo['curCapacity'];
        
        if(capacity <= storeTo['maxCapacity']) {
            super.updateDocument(storeIdFrom, {curCapacity : 0});
            return await super.updateDocument(storeIdTo, {curCapacity: capacity});
        } else {
            return 'fullStoreTo';
        } 
    }
}



module.exports = StoreService;