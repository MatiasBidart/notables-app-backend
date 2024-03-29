const upload= require('./multer.upload');
const router = require('express').Router();

router.route('/')
    .post(upload.uploadFile, upload.getFileUrl);

module.exports = router;