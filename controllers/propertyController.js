const Property = require("../database/Property");


//========================================
// ADD PROPERTY
//========================================

exports.addProperty = async(req,res)=>{


try{


const images =

req.files.images ?

req.files.images.map(

(file)=>file.path

)

:[];



const videos =

req.files.videos ?

req.files.videos.map(

(file)=>file.path

)

:[];



const property = await Property.create({


...req.body,


images,

videos,


status:"available",

views:0,

isDeleted:false


});



return res.status(201).json({


message:

"Property Added Successfully",


property


});


}


catch(error){


return res.status(500).json({


message:error.message


});


}


};

//========================================
// GET ALL PROPERTIES
//========================================

exports.getAllProperties = async (req, res) => {

    try {

        const properties = await Property.find({

            isDeleted: false

        });


        return res.status(200).json(

            properties

        );


    } catch (error) {


        return res.status(500).json({

            message: error.message

        });


    }

};


//========================================
// GET PROPERTY BY ID
//========================================

exports.getPropertyByID = async (req, res) => {

    try {

        const property = await Property.findById(

            req.params.id

        );


        if (!property) {

            return res.status(404).json({

                message: "Property Not Found"

            });

        }


        property.views += 1;

        await property.save();


        return res.status(200).json(

            property

        );


    }

    catch (error) {


        return res.status(500).json({

            message: error.message

        });


    }

};


//========================================
// UPDATE PROPERTY
//========================================

exports.updateProperty = async (req, res) => {

    try {

        const property = await Property.findById(

            req.params.id

        );


        if (!property) {

            return res.status(404).json({

                message: "Property Not Found"

            });

        }


        Object.assign(

            property,

            req.body

        );


        


        await property.save();


        return res.status(200).json({

            message: "Property Updated Successfully",

            property

        });


    }

    catch (error) {


        return res.status(500).json({

            message: error.message

        });


    }

};


//========================================
// CHANGE PROPERTY STATUS
//========================================

exports.changeStatus = async (req, res) => {

    try {

        const property = await Property.findById(

            req.params.id

        );


        if (!property) {


            return res.status(404).json({

                message: "Property Not Found"

            });


        }


        property.status = req.body.status;


    


        await property.save();


        return res.status(200).json({

            message: "Status Updated Successfully",

            property

        });


    }


    catch (error) {


        return res.status(500).json({

            message: error.message

        });


    }

};


//========================================
// HIDE PROPERTY
//========================================

exports.hideProperty = async (req, res) => {

    try {

        const property = await Property.findById(

            req.params.id

        );


        if (!property) {


            return res.status(404).json({

                message: "Property Not Found"

            });


        }


        property.status = "hidden";


        


        await property.save();


        return res.status(200).json({

            message: "Property Hidden Successfully"

        });


    }


    catch (error) {


        return res.status(500).json({

            message: error.message

        });


    }

};


//========================================
// DELETE PROPERTY
//========================================

exports.deleteProperty = async (req, res) => {

    try {

        const property = await Property.findById(

            req.params.id

        );


        if (!property) {


            return res.status(404).json({

                message: "Property Not Found"

            });


        }


        property.isDeleted = true;


        await property.save();


        return res.status(200).json({

            message: "Property Deleted Successfully"

        });


    }


    catch (error) {


        return res.status(500).json({

            message: error.message

        });


    }

};