import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 z-50 flex items-center px-6 md:px-12">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/ThinkerRoot.png"
          alt="ThinkerRoot Logo"
          className="h-10 w-10 object-contain"
        />
        <span className="text-xl font-bold text-white">ThinkerRoot</span>
      </div>

      {/* Links */}
      <div className="ml-auto flex gap-6 text-zinc-300 font-medium">
        <a href="#hero" className="hover:text-white transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#tracks" className="hover:text-white transition-colors">
          Tracks
        </a>
        <a href="#schedule" className="hover:text-white transition-colors">
          Schedule
        </a>
        <a href="#register" className="hover:text-white transition-colors">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
