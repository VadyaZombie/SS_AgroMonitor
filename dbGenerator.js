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
        square: 75,
        capacity: 50,
        drivers: []
    },
    {
        square: 50,
        capacity: 40,
        drivers: []
    },
    {
        square: 50,
        capacity: 50,
        drivers: []
    },
    {

        square: 50,
        capacity: 0,
        drivers: []
    }
];
const arrayOfInitCars = [{

        weight: 2200,
        max_cap: 1100,
        cur_cap: 500,
        driver_id:''
    },
    {
        weight: 2200,
        max_cap: 1100,
        cur_cap: 500,
        driver_id:''
    },
    {
        weight: 2100,
        max_cap: 1000,
        cur_cap: 700,
        driver_id:''
    },
    {

        weight: 2400,
        max_cap: 1500,
        cur_cap: 180,
        driver_id:''
    },
    {

        weight: 2200,
        max_cap: 1100,
        cur_cap: 0,
        driver_id:''
    }
];
const arrayOfInitGarages = [{
        max_cap: 100,
        cur_cap: 0,
        cars_id: []
    },
    {
        max_cap: 120,
        cur_cap: 0,
        cars_id: []
    },
    {
        max_cap: 120,
        cur_cap: 0,
        cars_id: []
    }
];
const arrayOfInitStores = [{
        max_cap: 50000,
        cur_cap: 10050,
    },
    {
        max_cap: 50000,
        cur_cap: 0,
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