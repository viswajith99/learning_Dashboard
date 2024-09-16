import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../../config/axiouInstance';

export const UpdateCourse = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null); // Initialize courseData as null
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch the course details by ID
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axiosInstance.get(`/courses/${id}`);
        setCourseData(response.data.data); // Set the fetched course data
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    fetchCourse();
  }, [id]);

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
      await axiosInstance.put(`/courses/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Course updated successfully!');
      navigate('/courses'); // Redirect to the course list after the update
    } catch (error) {
      console.error('Error updating course:', error);
      alert('Failed to update course');
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (!courseData) {
    return <div>Course not found</div>; // Show error if no course data is found
  }

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={courseData.title || ''}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <textarea
          name="desc"
          placeholder="Description"
          value={courseData.desc || ''}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        ></textarea>
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={courseData.duration || ''}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="instructorName"
          placeholder="Instructor Name"
          value={courseData.instructorName || ''}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={courseData.price || ''}
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
          Update Course
        </button>
      </form>
    </div>
  );
};
