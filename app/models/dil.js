const mongoose = require("mongoose");

const dilSchema = new mongoose.Schema({
  sunucuID: String,
  kullanıcıID: String,
  lang: String,
})
module.exports = mongoose.model('dil_data', dilSchema)