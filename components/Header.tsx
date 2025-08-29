import React from "react";

const Header: React.FC = () => {
  return (
    <header
      id="hero"
      className="pt-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-black text-center px-4"
    >
      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
        ThinkerRoot Ideathon 2025
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-2xl text-zinc-300 max-w-2xl">
        A one of a kind hackathon designed to nurture core innovation.
        Empowering developers, thinkers, and creators to build impactful
        solutions.
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <a
          href="#register"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
        >
          Register Now
        </a>
      </div>
    </header>
  );
};

export default Header;
