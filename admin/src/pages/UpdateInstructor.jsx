import { useForm } from "react-hook-form";
import { axiosInstance } from "../config/axiouInstance";
import toast from "react-hot-toast";
import { useState } from "react";


export const UpdateInstructor = () => {
  const [id, setId] = useState('');
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axiosInstance.put(`/instructors/${id}`, data);
      toast.success('Instructor updated successfully');
      setId('');
    } catch (error) {
      toast.error('Failed to update instructor');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Instructor</h1>
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register('name')} type="text" className="input input-bordered" />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register('email')} type="email" className="input input-bordered" />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register('password')} type="password" className="input input-bordered" />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Role</span>
          </label>
          <select {...register('role')} className="select select-bordered">
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Instructor
        </button>
      </form>
    </div>
  );
};
