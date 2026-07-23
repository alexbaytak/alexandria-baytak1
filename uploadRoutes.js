const express = require("express");

const router = express.Router();


const upload = require(

"../middlewares/uploadMiddleware"

);


const authMiddleware = require(

"../middlewares/authMiddleware"

);


const adminMiddleware = require(

"../middlewares/adminMiddleware"

);



router.post(

"/",

authMiddleware,

adminMiddleware,

upload.fields([

{

name:"images",

maxCount:50

},

{

name:"videos",

maxCount:10

}

]),


(req,res)=>{


res.status(200).json({

message:"Files Uploaded Successfully",

files:req.files

});


}


);


module.exports = router;