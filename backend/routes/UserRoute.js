const createUser = require('../controllers/UserController');
const fileUpload = require('../middlewares/FileUploader');

const route=require('express').Router()


route.post('/signup',fileUpload.single('profileImage'),createUser)


module.exports=route;