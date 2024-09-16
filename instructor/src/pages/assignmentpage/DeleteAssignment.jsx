import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { axiosInstance } from '../../config/axiouInstance.js';

export const DeleteAssignment = () => {
  const [assignmentId, setAssignmentId] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleChange = (e) => {
    setAssignmentId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await axiosInstance.delete(`assignments/${assignmentId}`);
      alert('Assignment deleted successfully!');
      navigate('/instructor/assignments'); // Navigate to the assignments list page or dashboard after successful deletion
    } catch (error) {
      console.error('Error deleting assignment:', error);
      alert('Failed to delete assignment');
    }
  };
  const handleCreateClick = () => {
    navigate('/instructor/create-assignment'); // Navigate to DeleteAssignment page
  };
  const handleUpdateClick = () => {
    navigate('/instructor/update-assignment'); // Navigate to UpdateAssignment page
  };

 

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Delete Assignment</h2>
      <input
        type="text"
        name="assignmentId"
        placeholder="Enter Assignment ID"
        value={assignmentId}
        onChange={handleChange}
        className="input input-bordered w-full mb-4"
      />
      <button
        type="button"
        className="btn btn-danger w-full"
        onClick={handleDelete}
      >
        Delete Assignment
      </button>
      <div className="mt-4 space-y-2">
        <button type="button" className="btn btn-primary w-full" onClick={handleCreateClick}>
          Create
        </button>
        <button type="button" className="btn btn-primary w-full" onClick={handleUpdateClick}>
          Update
        </button>
      </div>
    </div>
  );
};
