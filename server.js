const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('emissions');
  const emissionFactorsCollection = db.collection('emissionFactors');
  const emissionsRouter = createRouter(emissionFactorsCollection);
  app.use('/api/emissions/emissionFactors', emissionsRouter);
})
.catch(console.err)

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('emissions');
  const userDataCollection = db.collection('userData')
  const emissionsRouter = createRouter(userDataCollection);
  app.use('/api/emissions/users', emissionsRouter);
})
.catch(console.err)


app.listen(3000, function(){
  console.log("App running on port 3000");
})
