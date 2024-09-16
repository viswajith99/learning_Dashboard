import React, { useState } from 'react';
import axios from 'axios';

export const SubmitAssignment = () => {
  const [assignmentId, setAssignmentId] = useState('');
  const [userId, setUserId] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userId);

    try {
      await axios.post(`http://localhost:5000/api/assignments/${assignmentId}/submit`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Assignment submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to submit assignment');
    }
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Assignment ID"
          value={assignmentId}
          onChange={(e) => setAssignmentId(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="file-input file-input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Submit Assignment
        </button>
      </form>
    </div>
  );
};


