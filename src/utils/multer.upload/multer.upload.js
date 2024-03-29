const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'assets/images');
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      console.log('🎈🎈🎈')
      console.log(file)
    }
  });
  
  const upload = multer({ storage: storage });
  
  exports.uploadFile = upload.single('file');
  
  exports.getFileUrl = (req, res) => {
    const fileUrl = process.env.NODE_ENV === 'production' ? 'https://notables-backend.onrender.com/api/v1/' + req.file.patch : 'http://localhost:9000/' + req.file.path;
    res.json({ url: fileUrl });
    console.log('🎄🎄🎄')
    console.log(fileUrl)
  };