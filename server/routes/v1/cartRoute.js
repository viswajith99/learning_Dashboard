import express from 'express';
import { addCourseToCart, getCart } from '../../controller/cartController.js';
import { authUser } from '../../middleware/authUser.js';
const router = express.Router();

// Route to add a course to the cart
router.post('/add/:courseId',authUser, addCourseToCart);

// Route to get the cart for a user
router.get('/:userId', getCart);

export default router;