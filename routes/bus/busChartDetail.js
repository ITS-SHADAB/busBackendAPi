const express = require('express');
const { busChartDetail } = require('../../controller/bus/busChartDetail');
const router = express.Router();

router.get('/busChart', busChartDetail);
module.exports = router;
