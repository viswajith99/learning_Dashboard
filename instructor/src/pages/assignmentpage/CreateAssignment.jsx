import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { axiosInstance } from '../../config/axiouInstance.js';

export const CreateAssignment = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const [assignmentData, setAssignmentData] = useState({
    title: '',
    description: '',
    course: '',
    dueDate: '',
    maxMarks: '',
    file: null,
  });

  const handleChange = (e) => {
    setAssignmentData({ ...assignmentData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setAssignmentData({ ...assignmentData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in assignmentData) {
      formData.append(key, assignmentData[key]);
    }

    try {
      await axiosInstance.post('assignments', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Assignment created successfully!');
    } catch (error) {
      console.error('Error creating assignment:', error);
      alert('Failed to create assignment');
    }
  };


  const handleUpdateClick = () => {
    navigate('/instructor/update-assignment'); 
  };

  const handleDeleteClick = () => {
    navigate('/instructor/delete-assignment'); 
  };

  return (
    <div className="p-10">
       <h2 className="text-2xl mb-4">Create Assignment</h2>
    
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={assignmentData.title}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={assignmentData.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        ></textarea>
        <input
          type="text"
          name="course"
          placeholder="Course ID"
          value={assignmentData.course}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="date"
          name="dueDate"
          value={assignmentData.dueDate}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="maxMarks"
          placeholder="Max Marks"
          value={assignmentData.maxMarks}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Create Assignment
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
