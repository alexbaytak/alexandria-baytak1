const mongoose = require("mongoose");


const SettingsSchema = new mongoose.Schema({


    websiteName:{

        type:String,

        default:"إسكندرية بيتك للعقارات"

    },

    whatsappNumber:{

        type:String,

        default:"01012436550"

    },

    facebookURL:{

        type:String,

        default:""

    },

    email:{

        type:String,

        default:""

    },

    darkMode:{

        type:Boolean,

        default:false

    },

    maintenanceMode:{

        type:Boolean,

        default:false

    },

    createdAt:{

        type:Date,

        default:Date.now

    }


});


module.exports = mongoose.model(

    "Settings",

    SettingsSchema

);