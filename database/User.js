const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({

    fullName:{

        type:String,

        required:true

    },

    email:{

        type:String,

        required:true,

        unique:true

    },

    phone:{

        type:String,

        required:true,

        unique:true

    },

    password:{

        type:String,

        required:true

    },

    role:{

    type:String,
    
    enum:[
    
    "owner",
    "admin",
    "moderator",
    "user"
    
    ],

     default:"user"

    },

    isVerified:{

        type:Boolean,

        default:false

    },

    favorites:[

        {

            type:mongoose.Schema.Types.ObjectId,

            ref:"Property"

        }

    ],

    lastLogin:{

        type:Date,

        default:Date.now

    },

    profileImage:{

        type:String,

        default:""

    },

    isBlocked:{

        type:Boolean,

        default:false

    },

    createdAt:{

        type:Date,

        default:Date.now

    }

});


module.exports = mongoose.model(

    "User",

    UserSchema

);
