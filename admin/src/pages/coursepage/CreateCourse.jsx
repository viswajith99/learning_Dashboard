import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config/axiouInstance';

export const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    desc: '',
    duration: '',
    instructorName: '',
    price: '',
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCourseData({ ...courseData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in courseData) {
      formData.append(key, courseData[key]);
    }

    try {
      await axiosInstance.post('courses', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Course created successfully!');
      navigate('/courses'); // Redirect to course list after creation
    } catch (error) {
      console.error('Error creating course:', error);
      alert('Failed to create course');
    }
  };
  const handleUpdateClick = () => {
    navigate('/instructor/update-course'); 
  };

  const handleDeleteClick = () => {
    navigate('/instructor/delete-course'); 
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={courseData.title}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <textarea
          name="desc"
          placeholder="Description"
          value={courseData.desc}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        ></textarea>
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={courseData.duration}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="instructorName"
          placeholder="Instructor Name"
          value={courseData.instructorName}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={courseData.price}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Create Course
        </button>
   
      </form>
      <div className="mt-4 space-y-2">
        <button type="button" className="btn btn-primary w-full" onClick={handleUpdateClick}>
          Update
        </button>
        <button type="button" className="btn btn-primary w-full" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
