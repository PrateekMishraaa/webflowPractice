import React, { useState } from 'react';
import LeftPic from "../assets/leftpic.avif";
import WebLogo from "../assets/weblogo.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    FullName: "",
    EmailAddress: "",
    MobileNumber: "",
    Password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Validate Full Name
    if (!formData.FullName.trim()) {
      newErrors.FullName = "Full Name is required";
    }
    
    // Validate Email
    if (!formData.EmailAddress.trim()) {
      newErrors.EmailAddress = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.EmailAddress)) {
      newErrors.EmailAddress = "Email Address is invalid";
    }
    
    // Validate Mobile Number
    if (!formData.MobileNumber.trim()) {
      newErrors.MobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.MobileNumber.replace(/\D/g, ''))) {
      newErrors.MobileNumber = "Mobile Number should be 10 digits";
    }
    
    // Validate Password
    if (!formData.Password) {
      newErrors.Password = "Password is required";
    } else if (formData.Password.length < 8) {
      newErrors.Password = "Password must be at least 8 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post("http://localhost:4000/api/signup", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data)
      localStorage.setItem('token',token)
      toast.success("Registration successful!");
      navigate("/login")

      // Clear the form
      setFormData({
        FullName: "",
        EmailAddress: "",
        MobileNumber: "",
        Password: "",
      });
    } catch (error) {
      console.log(error);
      const message = error.response?.data?.message || "Registration failed. Please try again later.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="min-h-screen flex">
        {/* Left Image Section */}
        <div className="w-1/2 hidden md:block">
          <img src={LeftPic} alt="Left Banner" className="h-full w-full object-cover" />
        </div>

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12">
          {/* Logo */}
          <div className="mb-6 text-center">
            <img src={WebLogo} alt="Web Logo" className="w-32 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Webflow!</h2>
            <p className="text-sm text-gray-500">Create your account below</p>
          </div>

          {/* Form */}
          <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.FullName ? "border-red-500" : ""
                }`}
              />
              {errors.FullName && <p className="text-red-500 text-xs mt-1">{errors.FullName}</p>}
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email Address"
                name="EmailAddress"
                value={formData.EmailAddress}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.EmailAddress ? "border-red-500" : ""
                }`}
              />
              {errors.EmailAddress && <p className="text-red-500 text-xs mt-1">{errors.EmailAddress}</p>}
            </div>
            
            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                name="MobileNumber"
                value={formData.MobileNumber}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.MobileNumber ? "border-red-500" : ""
                }`}
              />
              {errors.MobileNumber && <p className="text-red-500 text-xs mt-1">{errors.MobileNumber}</p>}
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.Password ? "border-red-500" : ""
                }`}
              />
              {errors.Password && <p className="text-red-500 text-xs mt-1">{errors.Password}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white py-2 rounded-lg transition ${
                isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Registering..." : "Sign Up"}
            </button>
          </form>

          {/* Already have an account */}
          <p className="mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </section>
      {/* <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} /> */}
    </>
  );
};

export default SignUp;