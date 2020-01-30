const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(bodyParser.json());

var url = process.env.MONGODB_URI

MongoClient.connect(url)
.then((client) => {
  const db = client.db('heroku_2sb8cf67');
  const emissionFactorsCollection = db.collection('emissionFactors');
  const emissionsRouter = createRouter(emissionFactorsCollection);
  app.use('/api/heroku_2sb8cf67/emissionFactors', emissionsRouter);
})
.catch(console.err)

MongoClient.connect(url)
.then((client) => {
  const db = client.db('heroku_2sb8cf67');
  const userDataCollection = db.collection('userData')
  const emissionsRouter = createRouter(userDataCollection);
  app.use('/api/heroku_2sb8cf67/users', emissionsRouter);
})
.catch(console.err)


app.listen(process.env.PORT || 5000, function(){
  console.log("App running on port 3000");
})
