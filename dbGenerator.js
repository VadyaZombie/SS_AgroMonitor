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
        maxCapacity: 75,
        curCapacity: 50,
        driversId: []
    },
    {
        maxCapacity: 50,
        curCapacity: 40,
        driversId: []
    },
    {
        maxCapacity: 50,
        curCapacity: 50,
        driversId: []
    },
    {

        maxCapacity: 50,
        curCapacity: 0,
        driversId: []
    }
];
const arrayOfInitCars = [{
        maxCapacity: 1100,
        curCapacity: 500,
        driverId:''
    },
    {
        maxCapacity: 1100,
        curCapacity: 500,
        driverId:''
    },
    {
        maxCapacity: 1000,
        curCapacity: 700,
        driverId:''
    },
    {
        maxCapacity: 1500,
        curCapacity: 180,
        driverId:''
    },
    {
        maxCapacity: 1100,
        curCapacity: 0,
        driverId:''
    }
];
const arrayOfInitGarages = [{
        maxCapacity: 100,
        carsId: []
    },
    {
        maxCapacity: 120,
        carsId: []
    },
    {
        maxCapacity: 120,
        carsId: []
    }
];
const arrayOfInitStores = [{
        maxCapacity: 50000,
        curCapacity: 10050,
    },
    {
        maxCapacity: 50000,
        curCapacity: 0,
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