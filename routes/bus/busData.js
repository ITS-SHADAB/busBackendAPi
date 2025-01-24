const express = require('express');
const { busSaveData } = require('../../controller/bus/BusSaveData');
const router = express.Router();

router.post('/buses', busSaveData);
module.exports = router;
