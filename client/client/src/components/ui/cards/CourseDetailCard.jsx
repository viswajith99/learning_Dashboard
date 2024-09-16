import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CourseDetailCard = ({ course }) => {
  const navigate = useNavigate();
  const handleAddcartClick = () => {
    navigate(`/user/cart-page/${course._id}`); // Ensure this path matches your route configuration
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-64 object-cover" src={course?.image} alt={course?.title} />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{course?.title}</h1>
        <p className="text-gray-700 text-base mb-4">{course?.desc}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">Duration: {course?.duration} hours</span>
          <span className="text-gray-900 font-semibold text-lg">Price: ${course?.price}</span>
        </div>
        
        <div className="flex space-x-4">
          <button onClick={handleAddcartClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            PAY
          </button>
        </div>
      </div>
    </div>
  );
};
