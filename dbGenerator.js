const MongoClient = require('mongodb').MongoClient;
const {url, dbName} = require('./config');

const arrayOfInitDrivers = [{

        firstName: 'Vadim',
        lastname: 'Feoklistov',
        birthday: '12.08.1999',
        position: 'Node.js dev/CombMan'
    },
    {

        firstName: 'Dyk',
        lastname: 'Le',
        birthday: '01.01.1999',
        position: 'Node.js dev/CombMan'
    },
    {

        firstName: 'Makson',
        lastname: 'lastneimovich',
        birthday: '11.10.1991',
        position: 'Mentor/CombMan'
    },
    {

        firstName: 'John',
        lastname: 'Strong',
        birthday: '24.01.1994',
        position: 'CombMan'
    },
    {

        firstName: 'Steve',
        lastname: 'Grifel',
        birthday: '14.11.2000',
        position: 'CombMan'
    }
]
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
]

const mongoClient = new MongoClient(url, {
    useNewUrlParser: true
});

mongoClient.connect((err, client) => {
    if (err) throw err;
    console.log('Adding collection "Drivers"');
    let db = client.db(dbName);
    db.collection('Drivers').insertMany(arrayOfInitDrivers, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
        console.log('Collections with documents is created!');
    });
    db.collection('Fields').insertMany(arrayOfInitFields, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);

        console.log('Collections with documents is created!');
    });
    client.close();
});