import express from 'express';
import { createInstructor, instructorLogin, instructorProfile, checkInstuctor, instuctorLogout, getInstructorById } from '../../controller/instructorController.js';
import { authInstructor } from '../../middleware/authInstructor.js';
import { authAdmin } from '../../middleware/authAdmin.js';



const router = express.Router();

router.post('/signup', createInstructor);
router.get('/instructorlist/:id',authInstructor,authAdmin,getInstructorById)
router.post('/login', instructorLogin);
router.get('/profile/:id', authInstructor, instructorProfile);
router.get('/check-instructor',authInstructor, checkInstuctor);
router.post('/logout', instuctorLogout);

export default router;