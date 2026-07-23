module.exports = (req,res,next)=>{


const maintenanceMode = false;


if(maintenanceMode){


return res.send(

"الموقع يخضع حالياً لبعض التحديثات."

);


}


next();


};