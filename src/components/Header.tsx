import React from "react";

const Header: React.FC = () => (
  <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
    <a href="/">
      <h1 className="text-xl font-bold text-white">AI Plagiarism Detector</h1>
    </a>
    <nav>
      <a href="/contact" className="mx-2">
        Contact
      </a>
    </nav>
  </header>
);

export default Header;
