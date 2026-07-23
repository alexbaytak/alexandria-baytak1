const upload = require("../middlewares/uploadMiddleware");

const express = require("express");

const router = express.Router();

const {

    addProperty,

    getAllProperties,

    getPropertyByID,

    updateProperty,

    changeStatus,

    hideProperty,

    deleteProperty

} = require(

    "../controllers/propertyController"

);


const authMiddleware = require(

    "../middlewares/authMiddleware"

);


const adminMiddleware = require(

    "../middlewares/adminMiddleware"

);


const ownerMiddleware = require(

    "../middlewares/ownerMiddleware"

);


//======================================
// PUBLIC ROUTES
//======================================


router.get(

    "/",

    getAllProperties

);


router.get(

    "/:id",

    getPropertyByID

);


//======================================
// ADMIN ROUTES
//======================================


router.post(

"/add",

upload.fields([

{

name:"images",

maxCount:20

},

{

name:"videos",

maxCount:5

}

]),

addProperty

);


router.put(

    "/update/:id",

    authMiddleware,

    adminMiddleware,

    updateProperty

);


router.put(

    "/status/:id",

    authMiddleware,

    adminMiddleware,

    changeStatus

);


router.put(

    "/hide/:id",

    authMiddleware,

    adminMiddleware,

    hideProperty

);


//======================================
// OWNER ROUTES
//======================================


router.delete(

    "/delete/:id",

    authMiddleware,

    ownerMiddleware,

    deleteProperty

);


module.exports = router;
 