const VirtualTapesDrive= require('../models/virtualTapeDrive')


module.exports= {

    getVirtualTapesDriveInfos: async(req, res, next) => {
        console.log('status')
        VirtualTapesDrive.find({}, (err, data) => {
            res.json(data)
        })
    },
    postVirtualTapesDriveInfos: async(req, res, next) => {
        console.log(req.body);
        var Drive = new VirtualTapesDrive({
            vtd: req.body.vtd,
            port: req.body.port,
            target_channel: req.body.target_channel,
            lun: req.body.lun,
            initiator: req.body.initiator,
            serialNum: req.body.serialNum,
            tapeType: req.body.tapeType,
            wwpn: req.body.wwpn

        });
        Drive.save(function (err, data) {
            if (err){
                res.json(err)
            }
            res.json(data)
        });
    }
}


