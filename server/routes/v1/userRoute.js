import express from 'express'

import { upload } from '../../middleware/uploadMiddleware.js';
import { addCourseToUser, checkUser, getUserList, updateUser, userLogin, userLogout, userProfile, userSignup } from '../../controller/userController.js';
import {authUser} from '../../middleware/authUser.js';
import {authInstructor} from '../../middleware/authInstructor.js';
const router=express.Router()

router.post('/signup', upload.single('profilePic'), userSignup);

router.put('/update',authUser,updateUser)
router.post('/addcourse', authInstructor,addCourseToUser);
router.get('/userlist',authInstructor,getUserList)
router.post('/login',userLogin)
router.put('/profile',authUser,userProfile)
router.get('/check-user',authUser,checkUser)
router.post('/logout',authUser,userLogout)


export default router 