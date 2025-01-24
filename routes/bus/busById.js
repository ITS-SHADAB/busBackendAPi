const express = require('express');
const { busById } = require('../../controller/bus/BusById');
const router = express.Router();

router.get('/busId', busById);

module.exports = router;
