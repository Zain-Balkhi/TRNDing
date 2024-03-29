// config/db.js

const mongoose = require('mongoose');

// MongoDB connection URI (replace <username>, <password>, and <dbname> with your actual credentials)
const uri = 'mongodb://<username>:<password>@localhost:27017/<dbname>';

// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Export the Mongoose instance
module.exports = mongoose;
