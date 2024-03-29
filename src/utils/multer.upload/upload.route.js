const upload= require('./multer.upload');
const router = require('express').Router();

router.route('/')
    .get((req,res)=> {res.status(200).json({message: 'Here we upload files! please post to:', link: 'https://notables-backend.onrender.com/api/v1/upload'})})
    .post(upload.uploadFile, upload.getFileUrl);

module.exports = router;