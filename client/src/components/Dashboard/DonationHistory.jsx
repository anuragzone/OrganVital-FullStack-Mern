import React from 'react';

const DonationHistory = () => {
  return (
    <div className="dark:text-white px-4 py-6">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-3xl font-bold mb-4">Give the gift of life</span>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2 rounded-md w-full sm:w-auto">
          Donate More
        </button>
      </div>

  
      <div className="flex flex-col gap-10 items-center">
        {/* Past Donations */}
        <div className="w-full max-w-2xl px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center border-b pb-2 sm:text-left">Past Donations</h2>
          <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left">
            <p className="text-gray-400">Apr 10, 2024</p>
            <p className="font-medium">Blood Donation</p>
          </div>
        </div>

        {/* Donation Requests */}
        <div className="w-full max-w-2xl px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center border-b pb-2 sm:text-left">Donation Requests</h2>
          <div className="flex flex-col sm:flex-row justify-between   pb-2 text-center sm:text-left">
            <p className="text-gray-400">Apr 10, 2024</p>
            <p className="font-medium">Organ Donation</p>
          </div>
        </div>

        {/* Certificates */}
        <div className="w-full max-w-2xl px-4">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-center sm:text-left">Certificates</h2>
          <div className="flex flex-col sm:flex-row justify-between pb-2 text-center sm:text-left">
            <p className="text-gray-400">Apr 10, 2024</p>
            <p className="font-medium">Certificate of Appreciation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
