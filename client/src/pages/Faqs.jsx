import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is OrganVital?",
    answer:
      "OrganVital is a nonprofit platform dedicated to raising awareness about organ and blood donation, connecting donors with those in need, and educating the public.",
  },
  {
    question: "How can I become an organ or blood donor?",
    answer:
      "You can register through the 'Donate' section of our website. We’ll guide you through the process and help you find your nearest donation center.",
  },
  {
    question: "Is organ donation safe?",
    answer:
      "Yes, donating an organ (like a kidney or part of the liver) can be safe under medical supervision. Posthumous donation is also handled with utmost care and respect.",
  },
  {
    question: "Can I donate blood during illness?",
    answer:
      "It is advised not to donate blood if you are unwell. Please wait until you are fully recovered to ensure the safety of both you and the recipient.",
  },
  {
    question: "Will my family be informed if I register as a donor?",
    answer:
      "Yes. It is encouraged to inform your family about your decision to register as a donor, as it helps them support your choice in case of emergency.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-100 dark:bg-bggray py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
          Learn more about organ and blood donation. If you still have questions, feel free to <a href="/contact" className="text-red-500 font-semibold underline">contact us</a>.
        </p>
        <div className="text-left space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-card rounded-xl shadow p-4 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold"
              >
                {item.question}
                {activeIndex === index ? (
                  <FaChevronUp className="text-red-500" />
                ) : (
                  <FaChevronDown className="text-red-500" />
                )}
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600 dark:text-gray-300">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
