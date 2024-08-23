const mongoose = require('mongoose');
const { Provider } = require('../models/provider');
// Connection URI to mongodb
const uri = 'mongodb://127.0.0.1:27017/provider_db';

// Make db connection (asynchronously)
module.exports = mongoose.connect(uri)
    .then(result => {
        console.log('Connection Successful!');
    })
    .catch(error => console.log(error));
module.exports = Provider;