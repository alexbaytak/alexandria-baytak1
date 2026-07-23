const mongoose = require("mongoose");


const FavoriteSchema = new mongoose.Schema({

    userID:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"User",

        required:true

    },

    propertyID:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"Property",

        required:true

    },

    createdAt:{

        type:Date,

        default:Date.now

    }

});


module.exports = mongoose.model(

    "Favorite",

    FavoriteSchema

);