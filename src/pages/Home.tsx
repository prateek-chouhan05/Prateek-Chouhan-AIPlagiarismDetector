import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
