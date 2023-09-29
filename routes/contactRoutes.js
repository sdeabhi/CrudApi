const express = require("express");
const router = express.Router();
const {contact} = require('../controllers/contanctApi');

//router
router.post('/contact', contact);

module.exports  = router;