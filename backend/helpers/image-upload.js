const multer = require("multer");
const path = require("path");

//Destino das imagens armazenadas
const imageStore = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = "";

        if (req.baseUrl.includes("users")) {
            folders = "users";
        }
        if (req.baseUrl.includes("pets")) {
            folder = "pets";
        }

        cb(null, `public/images/${folder}/`);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const imageUpload = multer({
    storage: imageStore,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error("Por favor envie apenas jpg ou png"));
        }
        cb(undefined, true);
    },
});

module.exports = { imageUpload };
