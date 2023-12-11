const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
   content:{
    type:String
   },
   sender:{
    type:String,
   },
   receiver:{
    type:String,
   },
   createdAt:{
    type:Date,
    default:date.now()
   }
})

const Message = mongoose.model(messageSchema,'Message');
module.exports = Message;