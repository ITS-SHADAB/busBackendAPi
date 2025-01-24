const { searchBusData } = require('../../utils/syncWithApi');

const BusSaveData = async (req, res) => {
  try {
    // Extract parameters from the request body
    const { fromCityId, toCityId, journeyDate } = req.body;

    console.log(req.body);
    console.log(req.params);
    if (!fromCityId || !toCityId || !journeyDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Fetch data from the Mantish API
    const mantishData = await searchBusData(fromCityId, toCityId, journeyDate);

    if (!mantishData || !mantishData.data) {
      return res.status(404).json({ error: 'No data found from Mantish API' });
    }

    return res
      .status(201)
      .json({ message: 'data get successfully', data: mantishData });
  } catch (error) {
    console.error('Error saving Mantish data:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = BusSaveData;
