const {MongoClient} = require('mongodb');
const {url,dbName} = require('./config');

let db = client = null;
const mongoClient = new MongoClient(url, {
    useNewUrlParser: true
});

const getConnectionDb = async () => {
    try {
        if (client) {
            throw new Error('Only one connection to database');
        } else {
            client = await mongoClient.connect();
            db = client.db(dbName);
            console.log('Connect DB');
        }
    } catch (err) {
        console.log(err.message);
    }
};

const getDb = () => {
    try {
        if (db) {
            return db;
        } else { 
            throw new Error('No connection with database');
        }
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = {
    getConnectionDb,
    getDb
};