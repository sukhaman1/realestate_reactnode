const mongoose  = require('mongoose');  
const {Schema} = mongoose;
const UserSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    datetime:{
        type:Date,
        default:Date.now
    }
  });
module.exports = mongoose.model("register",UserSchema);