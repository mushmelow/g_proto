const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VirtualTapesDriveSchema = new Schema({
    vtd: String,
    port: String,
    target_channel: Number,
    lun: Number,
    initiator: Number,
    serialNum: String,
    tapeType: String,
    wwpn: String
});

const VirtualTapesDrive=mongoose.model('virtualTapesDrive', VirtualTapesDriveSchema)

module.exports = VirtualTapesDrive;