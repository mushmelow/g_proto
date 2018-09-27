const express= require("express");
const router= require('express-promise-router')();

const VirtualTapeDriveController = require('../controllers/virtualTapeDrive');

router.route('/')
    .post(VirtualTapeDriveController.postVirtualTapesDriveInfos)

router.route('/')
    .get(VirtualTapeDriveController.getVirtualTapesDriveInfos);


module.exports = router;