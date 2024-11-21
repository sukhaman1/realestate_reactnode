const mongoose  = require('mongoose');  
const {Schema} = mongoose;
const PropertyEnqSchema = new Schema({
    property_id:{
        type:String
    },
    username:{
        type:String,
        require:true
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    msg:{
        type:String
    },
    datetime:{
        type:Date,
        default:Date.now
    }
  });
module.exports = mongoose.model("property_enquiry",PropertyEnqSchema);