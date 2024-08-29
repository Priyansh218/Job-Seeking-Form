const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  zipCode: { type: String, required: true },
  workExperience: { type: String, required: true },
  position: { type: String },
  customPosition: { type: String },
  workingMode: { type: String, required: true },
  cv: { type: String, required: true }, // Path to the CV file
});

module.exports = mongoose.model('User', userSchema);
