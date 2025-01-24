const express = require('express');
const BusSaveData = require('../../controller/bus/BusSaveData');
const router = express.Router();

router.post('/buses', BusSaveData);
module.exports = router;
