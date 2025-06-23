import React from 'react';
import Iconcards from '../components/Homepage/Iconcards';
import { GrAnnounce } from "react-icons/gr";
import { FaHeartbeat, FaInfoCircle } from "react-icons/fa";
import { PiHandHeartFill } from "react-icons/pi";

const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-[#1a1a1a] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center">

        {/* Header Section */}
        <div className="mb-10">
          <div className=" text-red-500 flex justify-center text-[100px] sm:text-[150px] md:text-[200px]">
            <FaInfoCircle />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-800 dark:text-white">ABOUT US</h1>
          <p className="mt-4 text-lg max-w-3xl text-gray-600 dark:text-gray-300">
            Empowering communities with knowledge and compassion to save lives through organ and blood donation.
          </p>
        </div>

        {/* Who We Are */}
        <div className="text-left w-full px-4 sm:px-6 md:px-10">
          <h2 className="text-3xl font-bold text-red-600 mb-2">Who We Are</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            OrganVital is a nonprofit organization committed to promoting organ and blood donation.
            Our goal is to foster a community where lifesaving donations are widely understood, respected, and acted upon.
          </p>
        </div>

        {/* Our Approach */}
        <div className="text-left w-full mt-8 px-4 sm:px-6 md:px-10">
          <h2 className="text-3xl font-bold text-red-600 mb-2">Our Approach</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We conduct educational and outreach programs to inform the public about the importance of donation,
            encouraging people to take action and become real-life heroes.
          </p>
        </div>

        {/* Icon Cards */}
        <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10">
          <Iconcards
            icon={<GrAnnounce size={40} className="text-red-500" />}
            description="Awareness"
            para="We raise awareness through campaigns, events, and community workshops."
          />
          <Iconcards
            icon={<FaHeartbeat size={40} className="text-red-500" />}
            description="Saving Lives"
            para="Every donation has the power to give someone a second chance at life."
          />
          <Iconcards
            icon={<PiHandHeartFill size={40} className="text-red-500" />}
            description="Supporting Donations"
            para="We guide and support donors throughout their journey with respect and care."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
