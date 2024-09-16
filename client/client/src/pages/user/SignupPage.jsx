import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSignup } from '../../services/userApi';

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '' // Add mobile field
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Clear previous error
    setSuccess('');  // Clear success message
    try {
      const res = await userSignup(formData);
      if (res.success) {
        setSuccess('Signup successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);  // Redirect after 2 seconds
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4">Signup</h1>

        {/* Show success or error messages */}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-error">{error}</div>}

        {/* Form Fields */}
        <div className="form-control mb-4">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Confirm your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
      </form>
    </div>
  );
};
