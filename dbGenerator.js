const MongoClient = require('mongodb').MongoClient;
const {
    url,
    dbName
} = require('./config');

const arrayOfInitDrivers = [{
    _id: 1,
    firstName: 'Vadim',
    lastname: 'Feoklistov',
    birthday: '12.08.1999',
    position: 'Node.js dev/CombMan'
},
    {
        _id: 2,
        firstName: 'Dyk',
        lastname: 'Le',
        birthday: '01.01.1999',
        position: 'Node.js dev/CombMan'
    },
    {
        _id: 3,
        firstName: 'Makson',
        lastname: 'lastneimovich',
        birthday: '11.10.1991',
        position: 'Mentor/CombMan'
    },
    {
        _id: 4,
        firstName: 'John',
        lastname: 'Strong',
        birthday: '24.01.1994',
        position: 'CombMan'
    },
    {
        _id: 5,
        firstName: 'Steve',
        lastname: 'Grifel',
        birthday: '14.11.2000',
        position: 'CombMan'
    }
];
const arrayOfInitFields = [{
    _id: 0,
    square: 75,
    capascty: 50,
    drivers: []
},
    {
        _id: 1,
        square: 50,
        capacity: 40,
        drivers: []
    },
    {   _id: 2,
        square: 50,
        capacity: 50,
        drivers: []
    },
    {
        _id: 3,
        square: 50,
        capacity: 0,
        drivers: []
    }
];
const arrayOfInitCars = [{
    _id: 0,
    weight: 2200,
    max_cap: 1100,
    cur_cap: 500,
    driver_id: 1
},
    {
        _id: 1,
        weight: 2200,
        max_cap: 1100,
        cur_cap: 500,
        driver_id: 2
    },
    {   _id: 2,
        weight: 2100,
        max_cap: 1000,
        cur_cap: 700,
        driver_id: 3
    },
    {
        _id: 3,
        weight: 2400,
        max_cap: 1500,
        cur_cap: 180,
        driver_id: 4
    },
    {
        _id: 4,
        weight: 2200,
        max_cap: 1100,
        cur_cap: 0,
        driver_id: 5
    }
];
const arrayOfInitGarages = [{
    _id: 0,
    max_cap: 100,
    cur_cap: 0,
    cars_id: []
},
    {
        _id: 1,
        max_cap: 120,
        cur_cap: 0,
        cars_id: []
    },
    {   _id: 2,
        max_cap: 120,
        cur_cap: 0,
        cars_id: []
    }
];
const arrayOfInitStores = [{
    _id: 0,
    max_cap: 50000,
    cur_cap: 10050,
},
    {
        _id: 1,
        max_cap: 50000,
        cur_cap: 0,
    },
];


const mongoClient = new MongoClient(url, {
    useNewUrlParser: true
});

mongoClient.connect(async (err, client) => {
    if (err) throw err;
    console.log('Creating database');
    let db = client.db(dbName);
    await db.dropDatabase();
    await db.collection('Drivers').insertMany(arrayOfInitDrivers, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await db.collection('Fields').insertMany(arrayOfInitFields, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await db.collection('Cars').insertMany(arrayOfInitCars, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await db.collection('Garages').insertMany(arrayOfInitGarages, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await db.collection('Stores').insertMany(arrayOfInitStores, (err, res) => {
        if (err) throw err;
        console.log(`Amount of inserted documents: ${res.insertedCount}`);
    });
    await client.close();
});