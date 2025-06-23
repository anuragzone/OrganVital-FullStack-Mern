import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';

const Help = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('📬 Support request submitted!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 space-y-10 text-gray-800 dark:text-gray-100">
      {/* Title */}
      <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 text-center">
        <FaQuestionCircle className="inline-block mr-2" />
        Help & Support
      </h1>

    
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <FaPhone className="text-red-500 text-2xl mx-auto mb-2" />
          <h3 className="font-semibold">Phone</h3>
          <p>+91 98765 43210</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <FaEnvelope className="text-red-500 text-2xl mx-auto mb-2" />
          <h3 className="font-semibold">Email</h3>
          <p>support@organvital.org</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <FaMapMarkerAlt className="text-red-500 text-2xl mx-auto mb-2" />
          <h3 className="font-semibold">Office</h3>
          <p>Delhi, India</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-red-500">Frequently Asked Questions</h2>
        <ul className="space-y-3 text-sm sm:text-base">
          <li>
            <strong>Q: How do I book a donation appointment?</strong><br />
            A: Go to the Appointment section from your dashboard and select date/time and center.
          </li>
          <li>
            <strong>Q: Am I eligible to donate?</strong><br />
            A: Use our Eligibility Checker or contact us for personalized help.
          </li>
          <li>
            <strong>Q: How do I get my certificate?</strong><br />
            A: Your certificate is available in the “My Certificate” page once donation is confirmed.
          </li>
        </ul>
      </div>

      {/* Support Form */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-red-500">Still Need Help?</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="How can we help you?"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Help;
