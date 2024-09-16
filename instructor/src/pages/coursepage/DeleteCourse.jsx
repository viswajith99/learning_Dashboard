import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config/axiouInstance';

export const DeleteCourse = () => {
  const [courseId, setCourseId] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!courseId) {
      alert('Please enter a valid Course ID');
      return;
    }

    try {
      await axiosInstance.delete(`/courses/${courseId}`);
      alert('Course deleted successfully!');
      navigate('/courses'); // Redirect to course list after deletion
    } catch (error) {
      console.error('Error deleting course:', error);
      
      // More specific error handling
      if (error.response && error.response.status === 404) {
        alert('Course not found');
      } else {
        alert('Failed to delete course');
      }
    }
  };

  return (
    <div className="p-10">
      <input
        type="text"
        name="courseId"
        placeholder="Enter Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        className="input input-bordered w-full mb-4"
      />
      <button onClick={handleDelete} className="btn btn-error w-full">
        Delete Course
      </button>
    </div>
  );
};
