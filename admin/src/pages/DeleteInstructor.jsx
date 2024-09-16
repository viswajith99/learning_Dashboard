import React, { useState } from 'react';
import { axiosInstance } from '../config/axiouInstance';
import toast from 'react-hot-toast';


export const DeleteInstructor = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/instructors/${id}`);
      toast.success('Instructor deleted successfully');
      setId('');
    } catch (error) {
      toast.error('Failed to delete instructor');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Delete Instructor</h1>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Instructor ID</span>
        </label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input input-bordered"
        />
      </div>
      <button onClick={handleDelete} className="btn btn-error">
        Delete Instructor
      </button>
    </div>
  );
};


