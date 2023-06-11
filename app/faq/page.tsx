import React from "react";

const FaqPage: React.FC = () => {
  const faqData = [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework...",
    },
    {
      question: "How do I install Tailwind CSS?",
      answer: "You can install Tailwind CSS via npm or yarn...",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded p-4 hover:bg-gray-100"
          >
            <h3 className="text-xl font-medium mb-2">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
