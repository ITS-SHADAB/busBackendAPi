const express = require('express');
const { cityList } = require('../../controller/city/savedCity');
const router = express.Router();

router.get('/cityList', cityList);
module.exports = router;
