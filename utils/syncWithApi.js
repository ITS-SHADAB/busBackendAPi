// const fetch = require('node-fetch');

// Fetch and sync Mantish data
const searchBusData = async (fromCityId, toCityId, journeyDate) => {
  try {
    // const apiUrl = `https://partnerapi.iamgds.com/ota/Search?fromCityId=${fromCityId}&toCityId=${toCityId}&journeyDate=${encodeURIComponent(journeyDate)}`;
    const apiUrl = `http://localhost:8777/busData`;

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'access-token': process.env.TOKEN_URL,
      },
    });

    if (!response.ok) {
      throw new Error(`Mantish API returned status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during Mantish API sync:', error.message);
    throw new Error('Failed to sync with Mantish API');
  }
};
const cityData = async () => {
  try {
    // const apiUrl = `https://partnerapi.iamgds.com/ota/CityList`;
    const apiUrl = 'http://localhost:8777/cityList';

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Access-Token': process.env.TOKEN_URL,
      },
    });

    if (!response.ok) {
      throw new Error(`Mantish API returned status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during Mantish API sync:', error.message);
    throw new Error('Failed to sync with Mantish API');
  }
};
const searchBusById = async (fromCityId, toCityId, journeyDate, busId) => {
  // const apiUrl='https://partnerapi.iamgds.com/ota/SearchBus?fromCityId=4292&toCityId=4562&journeyDate=2022-05-07T00%3A00%3A00.000Z&busId=1'
  const apiUrl = `http://localhost:8777/busDataBuyId`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'access-Token': process.env.TOKEN_URL,
      },
    });

    if (!response.ok) {
      throw new Error(`Mantish Api returned status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during Mantish API sync:', error.message);
    throw new Error('Failed to sync with Mantish API');
  }
};

const busChart = async (fromCityId, toCityId, journeyDate, busId) => {
  // const apiUrl='https://partnerapi.iamgds.com/ota/Chart?fromCityId=4292&toCityId=4562&journeyDate=2022-06-30T00%3A00%3A00.000Z&busId=1'
  const apiUrl = `http://localhost:8777/busChart`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'access-token': process.env.TOKEN_URL,
      },
    });

    if (!response.ok) {
      throw new Error(`Mantish Api returned status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during Mantish API sync:', error.message);
    throw new Error('Failed to sync with Mantish API');
  }
};
module.exports = { searchBusData, cityData, searchBusById, busChart };
