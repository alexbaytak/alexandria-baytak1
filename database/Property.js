const mongoose = require("mongoose");


const PropertySchema = new mongoose.Schema({

    propertyID: {

        type: String,
        required: true,
        unique: true

    },


    title: {

        type: String,
        required: true,
        trim: true

    },


    description: {

        type: String,
        required: true

    },


    propertyType: {

        type: String,

        enum: [

            "apartment",
            "villa",
            "chalet",
            "shop",
            "office",
            "land",
            "warehouse",
            "building"

        ],

        required: true

    },


    purpose: {

        type: String,

        enum: [

            "sale",
            "rent"

        ],

        required: true

    },


    status: {

        type: String,

        enum: [

            "draft",
            "pending",
            "available",
            "reserved",
            "sold",
            "rented",
            "hidden"

        ],

        default: "available"

    },


    city: {

        type: String,
        required: true

    },


    area: {

        type: String,
        required: true

    },


    price: {

        type: Number,
        required: true

    },


    space: {

        type: Number,
        required: true

    },


    bedrooms: {

        type: Number,
        default: 0

    },


    bathrooms: {

        type: Number,
        default: 0

    },


    floor: {

        type: Number,
        default: 0

    },


    balconies: {

        type: Number,
        default: 0

    },


    parking: {

        type: Boolean,
        default: false

    },


    elevator: {

        type: Boolean,
        default: false

    },


    furnished: {

        type: Boolean,
        default: false

    },


    installment: {

        type: Boolean,
        default: false

    },


    negotiable: {

        type: Boolean,
        default: false

    },


    security: {

        type: Boolean,
        default: false

    },


    electricityMeter: {

        type: Boolean,
        default: false

    },


    waterMeter: {

        type: Boolean,
        default: false

    },


    gas: {

        type: Boolean,
        default: false

    },


    internet: {

        type: Boolean,
        default: false

    },


    airConditioning: {

        type: Boolean,
        default: false

    },


    kitchen: {

        type: Boolean,
        default: false

    },


    images: {

        type: [String],

        default: []

    },


    videos: {

        type: [String],

        default: []

    },


    featured: {

        type: Boolean,

        default: false

    },


    views: {

        type: Number,

        default: 0

    },


    contacts: {

        type: Number,

        default: 0

    },


    favorites: {

        type: Number,

        default: 0

    },


    createdBy: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User"

    },


    updatedBy: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User"

    },


    isDeleted: {

        type: Boolean,

        default: false

    }


}, {

    timestamps: true

});


module.exports = mongoose.model(

    "Property",

    PropertySchema

);