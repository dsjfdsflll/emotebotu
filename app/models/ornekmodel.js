const mongoose = require('mongoose');


const TestSchema = new mongoose.Schema({
    sunucuID: String,
    kullanıcıID: String,
})

module.exports = mongoose.model('test_data', TestSchema)