const {MongoClient} = require('mongodb');
const {url, dbName} = require('./config');

let db = client = null;
const mongoClient = new MongoClient(url, {
    useNewUrlParser: true
});

const getConnectionDb = async () => {
    try {
        if(!client) {
            client = await mongoClient.connect();
            db = client.db(dbName);  
            console.log('Connect DB');
        } else {
            throw new Error('Only one connection to database');
        } 
    }
    catch(err) {
        console.log(err.message);
    }
};

const getDb = () => {
    return db;
};

module.exports = {
    getConnectionDb,
    getDb
};