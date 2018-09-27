const express= require("express");
const router= require('express-promise-router')();

const VirtualTapesController = require('../controllers/virtualTapes');
router.route('/')
    .get(VirtualTapesController.getVirtualTapesInfos);
router.route('/')
    .post(VirtualTapesController.postVirtualTapesInfos);
router.route('/:id')
    .put(VirtualTapesController.putVirtualTapesInfos);
module.exports = router;