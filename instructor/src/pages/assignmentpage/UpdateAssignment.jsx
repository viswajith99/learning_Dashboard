import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UpdateAssignment = ({ assignmentId }) => {
  const [assignmentData, setAssignmentData] = useState({
    title: '',
    description: '',
    course: '',
    dueDate: '',
    maxMarks: '',
  });

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/assignments/${assignmentId}`);
        setAssignmentData(response.data);
      } catch (error) {
        console.error('Error fetching assignment:', error);
      }
    };
    fetchAssignment();
  }, [assignmentId]);

  const handleChange = (e) => {
    setAssignmentData({ ...assignmentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/assignments/${assignmentId}`, assignmentData);
      alert('Assignment updated successfully!');
    } catch (error) {
      console.error('Error updating assignment:', error);
      alert('Failed to update assignment');
    }
  };

  return (
    <div className="p-10 bg-base-200 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Assignment</h2>
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
          placeholder="Due Date"
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
        <button type="submit" className="btn btn-primary w-full">
          Update Assignment
        </button>
      </form>
    </div>
  );
};

