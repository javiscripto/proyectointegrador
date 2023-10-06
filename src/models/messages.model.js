const mongoose=require("mongoose");

const messagesCollection= "messages";

const messageSchema= new mongoose.Schema({
    user:{type:String, max:256, required:true},
    message:{type:String, max:256, required:true}
})

const messageModel= mongoose.model(messagesCollection,messageSchema);

module.exports={messageModel}