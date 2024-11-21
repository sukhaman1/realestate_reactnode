const mongoose  = require('mongoose');  
const {Schema} = mongoose;
const PropertySchema = new Schema({
    pname:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    bedroom:{
        type:Number
    },
    bathroom:{
        type:Number
    },
    image:{
        type:String
    },
    sqft:{
        type:Number
    },
    descr:{
        type:String
    },
    userid:{
        type:String
    },
    datetime:{
        type:Date,
        default:Date.now
    }
  });
module.exports = mongoose.model("property",PropertySchema);