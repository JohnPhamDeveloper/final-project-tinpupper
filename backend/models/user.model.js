const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  restaurants: {
    type: [Number],
  },
  isBusiness: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model('user', userSchema);