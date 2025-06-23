import React from "react";
import { FaDownload, FaAward } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    name: "Blood Donation Certificate",
    date: "June 15, 2025",
    center: "Red Cross Blood Center, Lucknow",
    type: "Blood Donation",
  },
  {
    id: 2,
    name: "Organ Pledge Certificate",
    date: "May 05, 2025",
    center: "Apollo Hospital, Delhi",
    type: "Organ Pledge",
  },
];

const MyCertificate = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 text-center mb-6">
        🎓 My Certificates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaAward className="text-3xl text-yellow-500" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {cert.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{cert.type}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Issued on:</strong> {cert.date}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Center:</strong> {cert.center}
              </p>
            </div>

            <button
              onClick={() => window.print()} 
              className="mt-4 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              <FaDownload />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCertificate;
