const mongoose = require('mongoose');
require('dotenv').config();

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
  
      console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
};

module.exports = connectMongoDb;
