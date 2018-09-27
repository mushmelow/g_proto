const express= require("express");
const router= require('express-promise-router')();


const MountsController = require('../controllers/mounts');

router.route('/all')
    .get(MountsController.getMountsInfos);
router.route('/')
    .post(MountsController.postMountsInfos);
router.route('/:id')
    .put(MountsController.putMountsInfos);
router.route('/:state')
    .get(MountsController.getMountsByStatus);


module.exports = router;