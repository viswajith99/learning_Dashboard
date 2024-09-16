
import { Course } from "../models/courseModel.js";
import {Cart} from "../models/cartModel.js";







export const addCourseToCart = async (req, res) => {
  const { courseId } = req.params;
  const user = req.user;

  console.log('Authenticated user:', user);  // Log the entire user object
  console.log('User ID:', user.id);  // Log the user ID

  if (!user || !user.id) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    let cart = await Cart.findOne({ userId: user.id });
    if (!cart) {
      cart = new Cart({ userId: user.id, courses: [] });
    }

    const courseIndex = cart.courses.findIndex(c => c.courseId.toString() === courseId);
    if (courseIndex >= 0) {
      cart.courses[courseIndex].quantity += 1;
    } else {
      cart.courses.push({ courseId, quantity: 1 });
    }

    await cart.save();

    res.status(200).json({ message: 'Course added to cart', cart });
  } catch (err) {
    console.error('Error adding course to cart:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};





// Get the cart for a user
export const getCart = async (req, res) => {
    try {
        const { userId } = req.params;

        // Find the cart for the user
        const cart = await Cart.findOne({ user: userId }).populate('courses.course');

        if (!cart) {
            return res.status(404).json({ success: false, message: 'Cart not found' });
        }

        res.status(200).json({ success: true, data: cart });

    } catch (error) {
        console.error('Error retrieving cart:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
