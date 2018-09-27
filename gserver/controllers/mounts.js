const Mounts= require('../models/mounts')

module.exports= {

    getMountsInfos: async(req, res, next) => {
        Mounts.find({}, (err, data) => {
            console.log(data)
            res.json(data)
        })
    },

    postMountsInfos: async(req, res, next) => {
        console.log(req.body);
        var mount = new Mounts({
            state: req.body.state,
            tape: req.body.tape,
            driverName:req.body.driverName
        });
        mount.save(function (err, data) {
            if (err){
                res.json(err)
            }
            res.json(data)
        });
    },
    putMountsInfos: async(req, res, next) => {
        console.log("!!! test",req.params.id)
        Mounts.findByIdAndUpdate(req.params.id,
            {
                state: req.body.state,
                tape: req.body.tape,
                driverName: req.body.driverName,
            })
            .then(function (data) {
                console.log("mount/unmount: ",data)
                res.json("ok")
            })
            .catch(function (err){
                console.log(err)
            })
    },
    getMountsByStatus: async(req, res, next) => {
        console.log("!!!!test",req.params.state)
        Mounts.find({
            state: req.params.state
        })
        .then(function (data) {
            console.log("mount/unmount: ",data)
            res.json(data)
        })
    }
}
