import React from "react";
import HomePageImage from "../components/Homepage/HomePageImage";
import SuccessStories from "../components/Homepage/SuccessStories";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HomePageImage />

      {/* Mission Section */}
      <section className="w-full px-4 sm:px-6 py-8 flex flex-col items-center text-center max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600">
          Our Mission
        </h1>
        <p className="text-base sm:text-lg mt-4 font-medium text-gray-700 dark:text-gray-300 max-w-2xl">
          We are dedicated to raising awareness about the importance of blood
          and organ donation, supporting donors, and saving lives.
        </p>

        <section className="w-full bg-gradient-to-br rounded-2xl mt-4 from-rose-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-600">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1. Register",
                  desc: "Sign up as a donor or volunteer in seconds.",
                },
                {
                  step: "2. Educate & Spread",
                  desc: "Join campaigns to raise awareness.",
                },
                {
                  step: "3. Save Lives",
                  desc: "Contribute to saving lives directly or indirectly.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-card p-6 rounded-xl shadow hover:scale-105 transition"
                >
                  <h3 className="text-xl font-bold mb-2 text-red-500">
                    {item.step}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section className="w-full bg-white dark:bg-gray-900 py-10">
        <div className="max-w-6xl mx-auto text-center grid grid-cols-2 sm:grid-cols-4 gap-6 px-4">
          {[
            { number: "10,000+", label: "Lives Impacted" },
            { number: "5,200+", label: "Blood Donations" },
            { number: "500+", label: "Organ Transplants" },
            { number: "100+", label: "Volunteer Events" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-3xl font-bold text-red-600">{stat.number}</h3>
              <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <div>
        <SuccessStories />
      </div>
     
      <div className="bg-red-100 dark:bg-red-800 text-red-900 dark:text-white text-center py-6 px-4 mt-6">
        <h2 className="text-lg sm:text-xl font-semibold">
          Donate blood or organs — Be someone's lifeline.
        </h2>
      </div>
    </div>
  );
};

export default Home;
