import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "./Navbar";
import bghero from "../Image/bg-hero.png"

const StickyForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    if (!captchaValue) {
      alert("Please verify the CAPTCHA.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4"  style={{ backgroundImage: `url(${bghero})` }}>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-500 mt-5 via-purple-500 to-green-500 p-6 shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl border border-gray-200 rounded-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white text-center">
          REQUEST A QUOTE
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA sitekey="6LcVzP4qAAAAAIkICgm1vjflLZ6J_SVMXOo8SGUd" onChange={handleCaptchaChange} />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StickyForm;