import bcrypt from 'bcrypt';
import { User } from '../models/userModel.js';
// import { cloudinaryInstance } from '../config/cloudinary.js';
import { generateToken } from '../utils/generateToken.js';
import { Course } from '../models/courseModel.js';


// Fetch user list
export const getUserList = async (req, res, next) => {
    try {
        const userList = await User.find();
        res.json({ success: true, message: 'Fetched user list', data: userList });
     
        
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};

export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password, mobile, profilePic, courses } = req.body;
        if (!name || !email || !password || !mobile) {
            return res.status(400).json({ success: false, message: "all fields required" });
        }

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(404).json({ success: false, message: "user already exist" });
        }

        //hashing
        const salt = 10;
        const hashedPassword = bcrypt.hashSync(password, salt);

        //create new user
        const newUser = new User({ name, email, password: hashedPassword, mobile, profilePic, courses });
        await newUser.save();

        //create token
        const token = generateToken(email);

        res.cookie("token", token, {
            sameSite: "None",
            secure: true,
            httpOnly: true,
        });
        res.json({ success: true, message: "user created successfully" });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const { name, email, mobile, profilepic } = req.body;
        const { id } = req.params;

        // Find user by ID and update their details
        const user = await User.findByIdAndUpdate(
            id,
            { name, email, mobile, profilePic: profilepic },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Save updated user
        await user.save();

        // Respond with success message
        res.json({ success: true, message: 'User updated successfully' });
    } catch (error) {
        // Handle any errors
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};




export const addCourseToUser = async (req, res, next) => {
    const { userId, courseId } = req.body;

    try {
        // Find the user and course
        const user = await User.findById(userId);
        console.log(req.body);
        
        const course = await Course.findById(courseId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

      
        if (user.courses.includes(courseId)) {
            return res.status(400).json({ success: false, message: 'Course already added' });
        }

   
        user.courses.push(courseId);
        await user.save();

        res.json({ success: true, message: 'Course added successfully', data: user });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};





export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(404).json({ success: false, message: 'User does not exist' });
        }

        const passwordMatch = bcrypt.compareSync(password, userExist.password);
        if (!passwordMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        const token = generateToken(email);
        res.cookie('user_token', token);
        res.json({ success: true, message: 'User logged in successfully' });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};


export const userProfile = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user=req.user
        const userData = await User.findOne({email:user.email}).select("-password");
        res.json({ success: true, message: 'User profile fetched', data: userData });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};

export const checkUser = async (req, res, next) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json({ success: true, message: 'User fetched', data: user });

       
        
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};
export const userLogout = async (req, res, next) => {
    try {
       
        res.clearCookie('token');
        res.json({ success: true, message: 'User logged out successfully' });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};
