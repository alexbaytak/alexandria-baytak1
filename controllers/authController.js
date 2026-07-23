const User = require("../database/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//=====================================
// ADMIN LOGIN
//=====================================

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;


        const user = await User.findOne({ email });


        if (!user) {

            return res.status(404).json({

                message: "User Not Found"

            });

        }


        const comparePassword = await bcrypt.compare(

            password,
            user.password

        );


        if (!comparePassword) {

            return res.status(401).json({

                message: "Wrong Password"

            });

        }


        const token = jwt.sign(

            {

                id: user._id,
                role: user.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn: process.env.JWT_EXPIRE

            }

        );

        res.status(200).json({

        message:"Login Successfully",

        token,

        user:{

        id:user._id,

        fullName:user.fullName,

        email:user.email,

        role:user.role

    }

});
        
    
        


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


//=====================================
// CREATE NEW ACCOUNT
// OWNER ONLY
//=====================================


exports.createAccount = async (req, res) => {


    try {


        const {

            fullName,
            email,
            phone,
            password,
            role

        } = req.body;


        const userExists = await User.findOne({

            email

        });


        if (userExists) {

            return res.status(400).json({

                message: "Email Already Exists"

            });

        }


        const hashPassword = await bcrypt.hash(

            password,
            12

        );


        const user = await User.create({

            fullName,
            email,
            phone,
            password: hashPassword,
            role

        });


        res.status(201).json({

            message: "Account Created Successfully",

            user

        });


    }

    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }

};