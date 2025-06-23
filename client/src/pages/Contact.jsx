import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 dark:bg-bggray py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side- Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-red-600">Contact Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Have a question, concern, or want to become a donor? We'd love to hear from you. Fill out the form or reach out through the details below.
          </p>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-500" />
            <span className="text-gray-800 dark:text-white">contact@organvital.org</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-red-500" />
            <span className="text-gray-800 dark:text-white">+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="text-gray-800 dark:text-white">
              123 Lifeline Street, New Delhi, India
            </span>
          </div>
        </div>

        {/* Right side -Form */}
        <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-bggray dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-bggray dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-bggray dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition duration-300 text-white py-2 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

