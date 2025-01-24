const { searchBusById } = require('../../utils/syncWithApi');

const busById = async (req, res) => {
  try {
    const { fromCityId, toCityId, journeyDate, busId } = req.body;
    if (!fromCityId || !toCityId || !journeyDate || !busId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mantishData = await searchBusById(
      fromCityId,
      toCityId,
      journeyDate,
      busId
    );
    if (!mantishData) {
      return res.status(404).json({ error: 'No data found Mantish API' });
    }
    return res
      .status(201)
      .json({ message: 'Data saved successfully', data: mantishData });
  } catch (error) {
    console.error('Error saving Mantish data:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { busById };
