import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CourseListCard = ({ course }) => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate(`/user/course-details/${course._id}`) // Correct URL pattern
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-4">
      <img
        className="w-full h-48 object-cover"
        src={course?.image}
        alt={course?.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course?.title}</div>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={handleEnrollClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};


