const express = require("express");
const router = express.Router();
const { register, login,forgetpassword } = require("../controllers/authApi");

const multer = require("multer");
const path = require("path");
// Set up the storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/image"); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename the file with a unique name
  },
});

const upload = multer({ storage });

router.post("/register", upload.single("image"), register);
router.post("/login", login);
router.post('/forgetpassword',forgetpassword)

module.exports = router;
