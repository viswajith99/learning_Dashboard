import { cloudinaryInstance } from "../config/cloudinary.js";
import { Course } from "../models/courseModel.js";
import { Instructor } from "../models/instructorModel.js";



export const getcourseLIst=  async(req,res,next)=>{
    try {
       
    const courseList=await Course.find();
        res.json({sucess:true,message:' fetched courselist',data:courseList});

    }

     catch (error) {
        res.status(error.status ||500).json({message:error.message ||'internal server error'});
        

    }
}
export const getcourseByid=  async(req,res,next)=>{

    const courseId = req.params.id;
    try {
      const course = await Course.findById(courseId);
      if (!course) return res.status(404).json({ message: 'Course not found' });
      res.json({ data: course });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
export const createCourse = async (req, res, next) => {
  try {
      const { title, desc, duration, instructorName,price } = req.body;

      // Check if the course already exists
      const existingCourse = await Course.findOne({ title });
      if (existingCourse) {
          return res.status(400).json({ message: 'Course already exists' });
      }

      // Log the image file path
      console.log('image.......', req.file);

      // Check if image file is provided
      if (!req.file) {
          return res.status(400).json({ message: 'Image not visible' });
      }

      // Upload image to Cloudinary
      const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path).catch((error) => {
          console.log(error);
          return res.status(500).json({ message: 'Image upload failed' });
      });

      console.log(uploadResult);
console.log(req.body);

      // Ensure all required fields are provided
      if (!title || !desc || !duration || !instructorName ||!price) {
          return res.status(400).json({ success: false, message: 'All fields are required' });
      }

      // Find the instructor by name
      const instructor = await Instructor.findOne({ name: instructorName });
      if (!instructor) {
          return res.status(404).json({ message: 'Instructor not found' });
      }

      // Create new course
      const newCourse = new Course({
          title,
          desc,
          duration,
          instructor: instructor._id // Use the instructor's ObjectId
      });

      // Set image URL if available
      if (uploadResult?.url) {
          newCourse.image = uploadResult.url;
      }

      await newCourse.save();

      res.json({ success: true, message: 'Course created successfully', data: newCourse });

  } catch (error) {
    console.log("error",error);
    
      res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
  }
};

  
export const updateCourse = async (req, res, next) => {
    try {
      const { title, desc, image, duration, instructor,price } = req.body;
      const { id } = req.params;
  
      // Check if all required fields are provided
      if (!title || !desc || !image || !duration || !instructor ||!price) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Find and update the course by ID
      const updatedCourse = await Course.findByIdAndUpdate(
        id,
        { title, desc, image, duration, instructor },
        { new: true } // Return the updated course
      );
  
      // If course is not found, return error
      if (!updatedCourse) {
        return res.status(404).json({ message: 'Course not found' });
      }
  
      // Respond with success message and updated course data
      res.json({ success: true, message: 'Course updated successfully', data: updatedCourse });
  
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
  };
  


export const deleteCourse = async (req, res, next) => {
  try {
      const { id } = req.params; 

      const deletedCourse = await Course.findByIdAndDelete(id);

      if (!deletedCourse) {
          return res.status(404).json({ success: false, message: 'Course not found' });
      }

      res.json({ success: true, message: 'Course deleted successfully', data: deletedCourse });
  } catch (error) {
      res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
  }
};
