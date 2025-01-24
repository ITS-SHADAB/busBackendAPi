const express = require('express');
require('dotenv').config();
const dataBaseConnectivity = require('./utils/dataBaseConnectivity');
require('./utils/cityUpdateScheduler');
const server = express();

server.use(express.json());

const cityList = require('./routes/city/city');
const busData = require('./routes/bus/busData');
const busChart = require('./routes/bus/busChartDetail');
const busById = require('./routes/bus/busById');

server.use('/', cityList);
server.use('/', busData);
server.use('/', busChart);
server.use('/', busById);

dataBaseConnectivity()
  .then(() => {
    console.log('database connected successfully...');
    server.listen(499, '0.0.0.0', () => {
      console.log('Server started on port http://localhost:499');
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
