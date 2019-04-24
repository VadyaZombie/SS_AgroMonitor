const AgroController = require('./agroController');
const StoreService = require('../services/storeService');

const moveStoreEnum = {
    NO_STORE_FROM: 'noStoreFrom',
    NO_STORE_TO: 'noStoreTo',
    EMPTY_STORE_FROM: 'emptyStoreFrom',
    FULL_STORE: 'fullStoreTo'
};

class StoreController extends AgroController {
    constructor(collectionName) {
        super(collectionName);

        this.storeService = new StoreService('stores');

        this.moveToStore = this.moveToStore.bind(this);
    }

    async moveToStore(req, res) {
        const result = await this.storeService.moveToStore(req.params['id'], req.body['storeId']);

        switch (result) {
            case moveStoreEnum.EMPTY_STORE_FROM:{
                res.status(200).send('Store From is empty');
                break;
            }
            case moveStoreEnum.FULL_STORE:{
                    res.status(200).send('Store To is full');
                    break;
                }
            case moveStoreEnum.NO_STORE_FROM: {
                    res.status(404).send('Store From doesn\'t exist');
                    break;
                }
            case moveStoreEnum.NO_STORE_TO: {
                    res.status(404).send('Store To doesn\'t exist');
                    break;
                }
            default:
                res.status(200).json(result['value']);
        }
    }
}

module.exports = StoreController;