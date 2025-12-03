// db.js
const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"
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
