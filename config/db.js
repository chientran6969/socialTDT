const mongoose = require('mongoose');
require('dotenv').config();
const connect = async() => {
    try {
        mongoose.connect('mongodb://localhost:27017/socialmediadb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log('MongoDB connected...');
    } catch (error) {
        console.log(error);
        process.exit();
    }
}
module.exports = { connect }