import multer from "multer";

const date= new Date();

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './src/public/images');
    },
    filename: function (req,file,cb){
        cb(null, file.originalname);
    }
});

export default uploader= multer({storage});


