const mongoose = require('mongoose');

async function dataBaseConnectivity() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Database Connected');
  } catch (error) {
    console.log('database not connected', error);
  }
}
module.exports = dataBaseConnectivity;
