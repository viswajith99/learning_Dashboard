import express from 'express'
import { createCourse, deleteCourse, getcourseByid, getcourseLIst, updateCourse } from '../../controller/courseController.js'
import { upload } from '../../middleware/uploadMiddleware.js';
import { authAdmin } from '../../middleware/authAdmin.js';
import { authInstructor } from '../../middleware/authInstructor.js';

const router=express.Router();

router.get('/courselist',getcourseLIst);
router.get('/courselist/:id',getcourseByid)
router.post('/create',authAdmin,upload.single('image'),createCourse);
router.put('/update',authAdmin,authInstructor,updateCourse)
router.delete('/delete',deleteCourse)

export default router 

