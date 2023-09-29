const express = require("express");
const router = express.Router();
const {adduser, getuser, getoneuser, updateuser, deleteUser} = require('../controllers/usersApi');

router.post('/adduser', adduser)
router.get('/getuser', getuser)
router.get('/getoneuser/:id', getoneuser)
router.put('/updateuser/:id', updateuser)
router.delete('/deleteUser/:id', deleteUser)

module.exports  = router;