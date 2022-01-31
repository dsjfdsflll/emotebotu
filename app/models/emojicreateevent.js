const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    sunucuID: String,
    kullanıcıID: String,
    emojiID: String,
    zaman: String
})

module.exports = mongoose.model('emojicreateevent', schema)