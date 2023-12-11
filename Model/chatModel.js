const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  messageId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'message'
  }
});

const Chat = mongoose.model(chatSchema, 'Chat');
module.exports = Chat;
