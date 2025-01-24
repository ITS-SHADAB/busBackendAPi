const City = require('../../model/city/CitySchema');
const { cityData } = require('../../utils/syncWithApi');

const saveCityData = async (req, res) => {
  try {
    const fetchedData = await cityData();
    const cities = fetchedData.data || [];
    if (cities.length === 0) {
      return res.status(400).json({ message: 'No city data found' });
    }

    const cityPromises = cities.map((city) => {
      const cityRecord = new City({
        CityId: city.CityId,
        City: city.City,
        State: city.State,
      });

      return cityRecord.save(); // Save each city to the database
    });

    // Wait for all cities to be saved
    await Promise.all(cityPromises);

    res.status(200).json({ message: 'Cities saved successfully' });
  } catch (error) {
    console.error('Error saving city data:', error);
    res.status(500).json({ message: 'Error saving city data' });
  }
};

// Update city data in the database
const updateCityData = async () => {
  try {
    const fetchedData = await cityData();
    const cities = fetchedData.data || [];

    const cityPromises = cities.map((city) => {
      return City.findOneAndUpdate(
        { CityId: city.CityId },
        { City: city.City, State: city.State },
        { upsert: true, new: true }
      );
    });

    // Wait for all city updates to finish
    await Promise.all(cityPromises);

    console.log('Cities updated successfully');
  } catch (error) {
    console.error('Error updating city data:', error.message);
  }
};

const cityList = async (req, res) => {
  try {
    const data = await City.find();

    if (!data || data.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: 'No cities found' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error fetching city list:', error);

    return res.status(500).json({
      success: false,
      message:
        'An error occurred while fetching the city list. Please try again later.',
    });
  }
};

module.exports = {
  saveCityData,
  updateCityData,
  cityList,
};
