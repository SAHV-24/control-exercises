const multer = require("multer");
const path = require("path");

// Usar almacenamiento en memoria en lugar de disco
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Formato de archivo no permitido"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
