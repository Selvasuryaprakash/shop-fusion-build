import React, { useState } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

const initialFormData: LoginFormData = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<LoginFormData> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Logged in with:", formData);
    setSubmitted(true);
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 bg-gradient-to-br from-blue-300 to-purple-300 p-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-md shadow-md bg-blue bg-[#5c64b3] p-4 text-white">
    
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h2>

        {submitted && (
          <p className="mb-4 text-green-600 text-center font-medium">
            Login successful!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-black border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full text-black border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Login
          </button>

          <div className="text-center text-white text-sm text-gray-500 mt-4">
            Don’t have an account? <a href="/signup" className="text-white-600 hover:underline">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
