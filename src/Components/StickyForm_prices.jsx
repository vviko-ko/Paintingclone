import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "./Navbar";
import bghero from "../Image/bg-hero.png";

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

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    if (!captchaValue) {
      alert("Please verify the CAPTCHA.");
      return;
    }

    setResult("Sending....");
    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "7293261f-ddd2-4bc4-8587-0f05fab8c8d6");

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      alert("Success");
      setResult(data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setCaptchaValue(null);
      event.target.reset();
    } else {
      alert("Error");
      setResult(data.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-4 py-6"
      style={{ backgroundImage: `url(${bghero})` }}
    >
      <Navbar />
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-6 sm:p-8 md:p-10 shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-xl mt-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-white text-center">
          REQUEST A QUOTE
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
            placeholder="Enter your email"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
            placeholder="Enter your phone number"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
            placeholder="Your message"
            rows="4"
          ></textarea>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LcVzP4qAAAAAIkICgm1vjflLZ6J_SVMXOo8SGUd"
              onChange={handleCaptchaChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        <p className="text-white text-center mt-4">{result}</p>
      </div>
    </div>
  );
};

export default StickyForm;
