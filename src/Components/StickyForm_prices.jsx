import React , {useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";

const StickyForm = () => {
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  return (
    <div className="sticky top-20 right-5  bg-gradient-to-r from-blue-500 via-purple-500 to green-500 p-6 shadow-lg  w-105 h-auto border border-gray-200">
      <h2 className="text-4xl font-bold mb-4 text-white text-center">REQUEST A QUOTE</h2>
      <form>
        <div className="mb-3 ">
          {/* <label className="block text-sm font-medium text-gray-700 ">Name</label> */}
          <input
            type="text"
            className="w-full mt-9 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
          <input
            type="email"
            className="w-full mt-1 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          {/* <label className="block text-sm font-medium text-gray-700">Phone</label> */}
          <input
            type="number"
            className="w-full mt-1 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          {/* <label className="block text-sm font-medium text-gray-700">Message</label> */}
          <textarea
            className="w-full mt-1 p-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="mb-3 ms-8">
          <ReCAPTCHA
            sitekey="/"
            onChange={handleCaptchaChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-6  mt-3 rounded-md hover:bg-blue-700 transition text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StickyForm;
