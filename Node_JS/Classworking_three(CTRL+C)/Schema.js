const mongoose = require('mongoose');
const User = require('./app/model/user');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    wesite: String
  },
  created_at: Date,
  updated_at: Date
})

const User = mongoose.model('User', userSchema);