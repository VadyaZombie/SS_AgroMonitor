const AgroService = require('./agroService');

class StoreService extends AgroService {
    constructor(collectioName) {
        super(collectioName);
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