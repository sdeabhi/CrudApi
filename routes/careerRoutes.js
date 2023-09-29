const express = require("express");
const router = express.Router();
const { career } = require("../controllers/careerApi");

const multer = require("multer");
const path = require("path");

// Set up the storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/resume"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype === 'application/pdf') {
      // Accept only PDF files
      callback(null, true);
    } else {
      // Reject other file types
      callback(new Error('Only PDF files are allowed.'));
    }
  },
});

//router
router.post("/career", upload.single("resume"), career);

module.exports = router;
