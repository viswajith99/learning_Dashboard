import React from 'react';
import { axiosInstance } from '../config/axiouInstance';
import { useForm } from 'react-hook-form';


export const CreateInstructor = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post('/instructors', data);
      toast.success('Instructor created successfully');
    } catch (error) {
      toast.error('Failed to create instructor');
      console.log(error); // Optional: log error for debugging
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Instructor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register('name')} type="text" className="input input-bordered" required />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register('email')} type="email" className="input input-bordered" required />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register('password')} type="password" className="input input-bordered" required />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Role</span>
          </label>
          <select {...register('role')} className="select select-bordered" required>
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Create Instructor</button>
      </form>
    </div>
  );
};


