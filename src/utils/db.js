const mongoose = require("mongoose");

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("INFO: funciona en base de datos", conn.connection.name);
    } catch (error) {
        console.log("ERROR");
    }
}

module.exports = connectMongo;