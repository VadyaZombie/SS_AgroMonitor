const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const driverRouter = require('./routes/driverRoute');
const  {MongoClient}  = require('mongodb');
const {url, dbName} = require('./config');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const mongoClient = new MongoClient(url, {useNewUrlParser: true});
mongoClient.connect((err, client) => {
   try{
       if(err) throw new Error(err);
       
       console.log('Connect DB');
       db = client.db(dbName);
       app.listen(3000, () => console.log('App listen'));
   }
    catch(err){
        console.log(err.message);
    }
});

app.get('/', (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
});

app.use('/api/drivers', driverRouter);

