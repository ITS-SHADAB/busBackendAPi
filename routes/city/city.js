const express = require('express');
const { cityList, saveCityData } = require('../../controller/city/savedCity');
const router = express.Router();

router.get('/cityList', cityList);

router.post('/city', saveCityData);
module.exports = router;
