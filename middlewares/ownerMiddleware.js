module.exports = (req,res,next)=>{


    if(req.user.role === "owner"){

        return next();

    }


    return res.status(403).json({

        message:"Access Denied"

    });


};