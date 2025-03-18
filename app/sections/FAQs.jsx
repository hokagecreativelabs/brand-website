"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  { question: "What types of development services do you offer?", answer: "We offer full-stack development, frontend engineering, backend systems, and more." },
  { question: "How do you ensure the quality of your projects?", answer: "We follow best practices, code reviews, and testing protocols." },
  { question: "What is your development process like?", answer: "We follow agile methodologies, keeping you updated at every step." },
  { question: "Can you work with existing platforms?", answer: "Yes, we can seamlessly integrate with existing systems." },
  { question: "How do you handle project timelines?", answer: "We set realistic deadlines and ensure timely communication and updates." },
  { question: "How often will I receive updates on the project?", answer: "We provide regular updates through your preferred communication channel." },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-[1440px] h-[721px] px-16 pt-20 pb-16 flex justify-center items-center">
      <div className="w-[1088px] h-[577px] max-w-[1088px] gap-20 flex flex-col items-center">
        <h2 className="text-6xl font-semibold text-center">
          <span className="text-black">Common</span> <span className="text-gray-500">Questions</span>
        </h2>
        <div className="w-[1088px] h-[335px] flex gap-4">
          <div className="w-[536px] h-[335px] flex flex-col gap-4">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className={`w-[536px] h-[101px] p-10 border rounded-3xl flex justify-between items-center cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "bg-gray-100" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </div>
            ))}
          </div>
          <div className="w-[536px] h-[335px] flex flex-col gap-4">
            {faqs.slice(3).map((faq, index) => (
              <div
                key={index + 3}
                className={`w-[536px] h-[101px] p-10 border rounded-3xl flex justify-between items-center cursor-pointer transition-all duration-300 ${
                  activeIndex === index + 3 ? "bg-gray-100" : ""
                }`}
                onClick={() => toggleFAQ(index + 3)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {activeIndex === index + 3 ? <FiMinus /> : <FiPlus />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
