import React from "react";

const Footer: React.FC = () => (
  <footer className="p-4 bg-gray-800 text-white text-center">
    <p className="text-gray-400">&copy; 2024 AI Plagiarism Detector. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="/contact" className="hover:font-bold">
        Contact
      </a>
      <span className="text-gray-400">|</span>

      <a href="#" className="hover:font-bold">
        Legal
      </a>
      <span className="text-gray-400">|</span>
      <a href="https://www.linkedin.com/in/prateek9144/" target="_blank" className="hover:font-bold">
        Social Media
      </a>
    </div>
  </footer>
);

export default Footer;

