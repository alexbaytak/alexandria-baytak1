const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("Database Connected Successfully");

    } catch (error) {

        console.error("Database Connection Failed");
        console.error(error.message);

        process.exit(1);

    }
};

module.exports = connectDatabase;