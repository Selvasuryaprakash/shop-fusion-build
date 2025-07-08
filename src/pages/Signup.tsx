// src/pages/Signup.tsx

import React, { useState } from 'react';

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialFormData: SignUpData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignUpData>(initialFormData);
  const [errors, setErrors] = useState<Partial<SignUpData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<SignUpData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password.";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    console.log("User signed up:", formData);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 p-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-xl shadow-lg bg-[#5c64b3] p-4 text-white">
    
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        
        {submitted && <p className="text-green-600 text-sm mb-4 text-center">Signed up successfully!</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          <div>
            <label className="block font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full mt-1 px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-black py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-black-700">
          Already have an account? <a href="/login" className="text-black -600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
