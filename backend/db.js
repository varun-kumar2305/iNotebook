// db.js
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://varunkumar89235_db_user:Varun%400504@cluster0.sshoutx.mongodb.net/?appName=Cluster0";
async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI, 
            console.log('Connected to MongoDB successfully!')
    );
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Export the function to use it elsewhere
module.exports = connectToMongo;
