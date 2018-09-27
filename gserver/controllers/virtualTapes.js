const VirtualTapes= require('../models/virtualTapes')

module.exports= {
    getVirtualTapesInfos: async(req, res, next) => {
        console.log('status')
        VirtualTapes.find({}, (err, data) => {
            res.json(data)
        })
    },
    postVirtualTapesInfos: async(req, res, next) => {
            console.log(req.body);
        var tape = new VirtualTapes({
            tapeName: req.body.tapeName,
            mountStatus: req.body.mountStatus
        });
        tape.save(function (err, data) {
            if (err){
                res.json(err)
            }
             res.json(data)
        });
    },
    putVirtualTapesInfos: async(req, res, next) => {
        VirtualTapes.findByIdAndUpdate(req.params.id,{mountStatus: req.body.mountStatus})
            .then(function (data) {
                console.log("mount/unmount: ",data)
                res.json("ok")
            })
            .catch(function (err){
                console.log(err)
            })
    }

}