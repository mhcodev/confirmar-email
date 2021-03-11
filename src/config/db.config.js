const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        const cn = await mongoose.connect('mongodb://localhost:27017/mhcode_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        cn.STATES.connected
        ? console.log('MongoDB Conected')
        : console.log('Error in MongoDB');

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    connectDB
}