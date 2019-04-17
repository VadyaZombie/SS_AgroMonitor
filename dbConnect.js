const {MongoClient} = require('mongodb');
const {url, dbName} = require('./config');

let curDb = client = null;
const mongoClient = new MongoClient(url, {
    useNewUrlParser: true
});

const getConnectionDb = async () => {
    try {
        client = await mongoClient.connect();
        curDb = client.db(dbName);  
        console.log('Connect DB');
    }
    catch(err) {
        console.log(err.message);
    }
};

const getCurDb = () => {
    return curDb;
};

module.exports = {
    getConnectionDb,
    getCurDb
};