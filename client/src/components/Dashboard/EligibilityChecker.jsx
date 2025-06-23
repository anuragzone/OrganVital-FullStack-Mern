import React, { useState } from "react";

const questions = [
  { question: "Are you at least 18 years old?", key: "age" },
  { question: "Do you weigh more than 50 kg?", key: "weight" },
  { question: "Have you donated blood in the last 3 months?", key: "recentDonation" },
  { question: "Are you on antibiotics or major medication?", key: "medications" },
  { question: "Do you currently have cold, flu, or fever?", key: "sick" },
  { question: "Had surgery in the last 6 months?", key: "surgery" },
];

const EligibilityChecker = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const checkEligibility = () => {
    const ineligible = ["recentDonation", "medications", "sick", "surgery"];
    const allAnswered = questions.every((q) => answers[q.key] !== undefined);

    if (!allAnswered) {
      setResult("⚠️ Please answer all questions.");
      return;
    }

    if (
      answers.age === "no" ||
      answers.weight === "no" ||
      ineligible.some((k) => answers[k] === "yes")
    ) {
      setResult("❌ You may not be eligible to donate right now. Please consult a medical professional.");
    } else {
      setResult("✅ You are likely eligible to donate. Thank you for your generosity!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 mt-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-600 dark:text-red-400 mb-6">
        Donation Eligibility Checker
      </h1>

      <div className="space-y-5">
        {questions.map(({ question, key }) => (
          <div key={key} className="bg-red-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <p className="font-medium text-gray-800 dark:text-white mb-3">{question}</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleAnswer(key, "yes")}
                className={`flex-1 min-w-[100px] px-4 py-2 rounded-md font-semibold text-sm ${
                  answers[key] === "yes"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer(key, "no")}
                className={`flex-1 min-w-[100px] px-4 py-2 rounded-md font-semibold text-sm ${
                  answers[key] === "no"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
                }`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={checkEligibility}
          className="bg-red-600 hover:bg-red-700 transition text-white font-semibold py-2 px-6 rounded-lg"
        >
          Check Eligibility
        </button>

        {result && (
          <p className="mt-6 px-4 text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
            {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default EligibilityChecker;
