require("dotenv").config();

const express = require("express");

const path = require("path");


const cors = require("cors");

const connectDatabase = require(
    "./config/database"
);

const authRoutes = require(
    "./routes/authRoutes"
);

const propertyRoutes = require(
    "./routes/propertyRoutes"
);

const uploadRoutes = require(
    "./routes/uploadRoutes"
);

const searchRoutes = require(
    "./routes/searchRoutes"
);

const app = express();


//==========================
// DATABASE
//==========================

connectDatabase();


//==========================
// MIDDLEWARES
//==========================

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({

        extended: true

    })
);


//==========================
// STATIC FILES
//==========================

app.use(

    "/uploads",

    express.static("uploads")

);


app.use(

    express.static(

        "frontend"

    )

);


//==========================
// ROUTES
//==========================

app.use(

    "/auth",

    authRoutes

);


app.use(

    "/properties",

    propertyRoutes

);


app.use(

    "/upload",

    uploadRoutes

);


app.use(

    "/search",

    searchRoutes

);


//==========================
// SERVER TEST
//==========================

app.get("/", (req, res) => {

    res.send(

        "Alexandria Baytak Server Running"

    );

});


//==========================
// FRONTEND
//==========================

app.get(

    "/home",

    (req, res) => {

        res.sendFile(

            __dirname +

            "/frontend/index.html"

        );

    }

);


//==========================
// PORT
//==========================

const PORT =

    process.env.PORT || 3000;


app.listen(

    PORT,

    () => {

        console.log(

            `Server Running On Port ${PORT}`

        );

    }

);