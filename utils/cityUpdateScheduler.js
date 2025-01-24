// // cityUpdateScheduler.js
// const cron = require('node-cron');
// const { updateCityData } = require('../controller/city/savedCity');

// cron.schedule('0 0 * * 0', async () => {
//   // Runs every Sunday at midnight
//   try {
//     console.log('Cron job running: Updating city data...');
//     await updateCityData();
//     console.log('Successfully updated city data!');
//   } catch (error) {
//     console.error('Error updating city data via cron job:', error.message);
//   }
// });

// console.log('Runs every Sunday at midnight');

// // Export the cron job for usage in other files
// module.exports = cron;
