const multer = require("multer");

const path = require("path");


const storage = multer.diskStorage({

    destination:(req,file,cb)=>{


        if(file.mimetype.startsWith("image")){

            cb(null,"uploads/images");

        }

        else if(file.mimetype.startsWith("video")){

            cb(null,"uploads/videos");

        }

        else{

            cb(new Error("File Type Not Allowed"));

        }

    },


    filename:(req,file,cb)=>{

        cb(

            null,

            Date.now() +

            "-" +

            file.originalname

        );

    }

});


const fileFilter = (req,file,cb)=>{


    if(

        file.mimetype.startsWith("image")

        ||

        file.mimetype.startsWith("video")

    ){

        cb(null,true);

    }

    else{

        cb(

            new Error(

                "Only Images And Videos Are Allowed"

            ),

            false

        );

    }

};


const upload = multer({

    storage,

    fileFilter,

    limits:{

        fileSize:1024*1024*200

    }

});


module.exports = upload;