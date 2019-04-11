const MongoClient = require('mongodb').MongoClient;
const {url, dbName} = require('./config');

const arrayOfInitDrivers = [{
        firstName: 'Vadim',
        lastName: 'Feoklistov',
        birthday: '12.08.1999',
        position: 'Node.js dev/CombMan'
    },
    {

        firstName: 'Dyk',
        lastName: 'Le',
        birthday: '01.01.1999',
        position: 'Node.js dev/CombMan'
    },
    {

        firstName: 'Makson',
        lastName: 'lastneimovich',
        birthday: '11.10.1991',
        position: 'Mentor/CombMan'
    },
    {

        firstName: 'John',
        lastName: 'Strong',
        birthday: '24.01.1994',
        position: 'CombMan'
    },
    {

        firstName: 'Steve',
        lastName: 'Grifel',
        birthday: '14.11.2000',
        position: 'CombMan'
    }
];

const arrayOfInitFields = [{
        field_id: 0,
        square: 75,
        capasity: 50,
        drivers: []
    },
    {
        field_id: 1,
        square: 50,
        capasity: 40,
        drivers: []
    },
    {
        field_id: 2,
        square: 50,
        capasity: 50,
        drivers: []
    },
    {
        field_id: 3,
        square: 50,
        capasity: 0,
        drivers: []
    }
];

const mongoClient = new MongoClient(url, {
    useNewUrlParser: true
});

mongoClient.connect((err, client) => {
    if (err) throw err;
    console.log('Adding collection "Drivers"');
    let db = client.db(dbName);
    db.collection('drivers').insertMany(arrayOfInitDrivers, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
        console.log('Collections with documents is created!');
    });
    db.collection('fields').insertMany(arrayOfInitFields, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);

        console.log('Collections with documents is created!');
    });
    client.close();
});