const MongoClient = require('mongodb').MongoClient;
const {url,dbName} = require('./config');

const arrayOfInitDrivers = [{
        firstname: 'Vadim',
        lastname: 'Feoklistov',
        birthday: '12.08.1999',
        position: 'Node.js dev/CombMan'
    },
    {
        firstname: 'Dyk',
        lastname: 'Le',
        birthday: '01.01.1999',
        position: 'Node.js dev/CombMan'
    },
    {
        firstname: 'Makson',
        lastname: 'lastneimovich',
        birthday: '11.10.1991',
        position: 'Mentor/CombMan'
    },
    {
        firstname: 'John',
        lastname: 'Strong',
        birthday: '24.01.1994',
        position: 'CombMan'
    },
    {
        firstname: 'Steve',
        lastname: 'Grifel',
        birthday: '14.11.2000',
        position: 'CombMan'
    }
];
const arrayOfInitFields = [{
        maxCap : 150000,
        curCap: 150000,
        drivers: []
    },
    {
        maxCap: 150000,
        curCap: 150000,
        drivers: []
    },
    {
        maxCap: 100000,
        curCap: 88000,
        drivers: []
    },
];
const arrayOfInitCars = [{

        weight: 2200,
        maxCap: 1100,
        curCap: 0,
        driverId:''
    },
    {
        weight: 2200,
        maxCap: 1100,
        curCap: 0,
        driverId:''
    },
    {
        weight: 2100,
        maxCap: 1000,
        curCap: 0,
        driverId:''
    },
    {

        weight: 2400,
        maxCap: 1500,
        curCap: 0,
        driverId:''
    },
    {

        weight: 2200,
        maxCap: 1100,
        curCap: 0,
        driverId:''
    }
];
const arrayOfInitGarages = [{
        maxCap: 100,
        curCap: 0,
        carsId: []
    },
    {
        maxCap: 120,
        curCap: 0,
        carsId: []
    },
    {
        maxCap: 120,
        curCap: 0,
        carsId: []
    }
];
const arrayOfInitStores = [{
        maxCap: 50000,
        curCap: 10050,
    },
    {
        maxCap: 50000,
        curCap: 0,
    }
];


const mongoClient = new MongoClient(url, {
    useNewUrlParser: true
});

mongoClient.connect(async (err, client) => {
    if (err) throw err;
    console.log('Creating database');
    let db = client.db(dbName);
    await db.dropDatabase();
    await db.collection('drivers').insertMany(arrayOfInitDrivers, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await db.collection('fields').insertMany(arrayOfInitFields, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await db.collection('cars').insertMany(arrayOfInitCars, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await db.collection('garages').insertMany(arrayOfInitGarages, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await db.collection('stores').insertMany(arrayOfInitStores, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await client.close();
});