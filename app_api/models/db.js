const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://marcoanthony:marcotanyt310@cluster0.2cf8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"        
        );
            
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1);
    }
};

module.exports = connectDB