const Property = require("../database/Property");


//===================================
// ADVANCED SEARCH
//===================================

exports.searchProperties = async (req,res)=>{

try{


const{

city,
area,
propertyType,
purpose,
status,
minPrice,
maxPrice,
bedrooms,
bathrooms,
minSpace,
maxSpace,
parking,
elevator,
installment,
furnished

}=req.query;


let query = {

isDeleted:false

};


//--------------------


if(city){

query.city = city;

}


if(area){

query.area = area;

}


if(propertyType){

query.propertyType = propertyType;

}


if(purpose){

query.purpose = purpose;

}


if(status){

query.status = status;

}


//--------------------


if(minPrice || maxPrice){

query.price = {};

if(minPrice){

query.price.$gte = Number(minPrice);

}

if(maxPrice){

query.price.$lte = Number(maxPrice);

}

}


//--------------------


if(minSpace || maxSpace){

query.space = {};

if(minSpace){

query.space.$gte = Number(minSpace);

}

if(maxSpace){

query.space.$lte = Number(maxSpace);

}

}


//--------------------


if(bedrooms){

query.bedrooms = Number(

bedrooms

);

}


if(bathrooms){

query.bathrooms = Number(

bathrooms

);

}


//--------------------


if(parking){

query.parking =

parking === "true";

}


if(elevator){

query.elevator =

elevator === "true";

}


if(installment){

query.installment =

installment === "true";

}


if(furnished){

query.furnished =

furnished === "true";

}


//--------------------


const properties =

await Property.find(query);


return res.status(200)

.json(properties);


}


catch(error){


return res.status(500)

.json({

message:error.message

});


}


};