// models/userModel.js

const mongoose = require('mongoose');

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
