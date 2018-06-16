var express = require('express');
var router = express.Router();


router.use("/", require('./home'));
router.use("/about", require('./about'));
router.use("/add", require('./add'));
router.use("/show", require('./show'));

module.exports=router;