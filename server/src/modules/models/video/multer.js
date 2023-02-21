const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/videos");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "video/mp4") {
        cb(null, true);
    } else {
        console.log("file type not supported", file);
        cb(new multer.MulterError("File type not supported"), false);
    }
};

const upload = multer({
    dest: "uploads/videos",
    limits: { fileSize: 20000000 },
    fileFilter: fileFilter,
    storage: storage,
}).single("video");

const uploadProcess = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            res.status(400).json({ status: "error", message: err });
        } else {
            console.log(`upload success ${req.file}`);
            next();
        }
    });
};

module.exports = { uploadProcess };
