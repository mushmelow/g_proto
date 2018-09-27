const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VirtualTapesSchema = new Schema({
    tapeName: String,
    mountStatus: {type: Boolean, default: false}
});

//create model
const VirtualTapes=mongoose.model('virtualTapes', VirtualTapesSchema)

//export the model
module.exports = VirtualTapes;