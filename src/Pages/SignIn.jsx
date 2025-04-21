import React, { useState } from 'react';
import Logo from "../assets/weblogo.png";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    EmailAddress: '',
    Password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.EmailAddress || !formData.Password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const { token } = response.data;

      localStorage.setItem('token', token);
      toast.success("Login Successful!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to login. Please check your credentials.");
    }
  };

  return (
    <section className="min-h-screen w-full relative bg-gray-50">
      <form onSubmit={handleSubmit} className="h-[80vh] w-[40%] absolute left-1/2 transform -translate-x-1/2 top-20 border-2 rounded-lg shadow-md bg-white">
        <div className="h-full w-full px-10 py-8">
          <img src={Logo} alt="Logo" className="mb-6 w-32" />
          <p className="py-4 text-2xl font-bold">Log in to your account</p>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="EmailAddress"
              value={formData.EmailAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>

          <p className="mt-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
