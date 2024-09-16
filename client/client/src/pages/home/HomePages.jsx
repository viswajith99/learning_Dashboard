import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseList } from '../../redux/features/courseSlice';
import { axiosInstance } from "../../config/axiosInstance";

export const HomePages = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.course);

  const fetchCourses = async () => {
    try {
      const response = await axiosInstance({
        url: "/course/courseList",
        method: "GET",
      });
      dispatch(fetchCourseList(response?.data?.data));
    } catch (error) {
      console.error("Failed fetching courses", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Learn Web</h1>
        <p className="text-xl mb-8">Your gateway to learning and growth.</p>
        <Link to="/user/courses">
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow-lg">
            Browse Courses
          </button>
        </Link>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Learn with Us?</h2>
          <p className="text-lg mb-8">
            At Learnify, we offer a wide range of courses designed to help you enhance your skills and knowledge. Our expert instructors and engaging content make learning easy and enjoyable.
          </p>
          <Link to="/about">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={course.image || './default-course-image.webp'}  // Fallback to default image if no image
                  alt={course.name}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <Link to={`/course-details/${course._id}`}>
                    <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                      More Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
