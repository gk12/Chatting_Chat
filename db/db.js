const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/chat_app';
async function database(cb) {
  try {
    await mongoose.connect(url);
    console.log('database connected');
    cb();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { database };
