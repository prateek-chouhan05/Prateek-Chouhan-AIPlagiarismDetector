import React from "react";

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center py-20">
    <h1 className="text-4xl md:text4xl text-white font-bold mb-4">
      Real-time AI-Powered Plagiarism Detection
    </h1>
    <p className="text-lg text-gray-400 mb-6">
      Upload your document to check for originality instantly.
    </p>
    <button
      className="px-4 py-2 bg-green-600 text-lg text-white rounded-full hover:bg-green-700 transition-colors"
      onClick={() => {
        window.location.href = "/dashboard";
      }}
    >
      Upload Your Document
    </button>
  </section>
);

export default HeroSection;
