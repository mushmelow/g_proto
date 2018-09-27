const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MountsSchema = new Schema({
    state: String,
    tape: String,
    driverName: String
});

const Mounts=mongoose.model('mounts', MountsSchema)

module.exports = Mounts;