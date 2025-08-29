import React from 'react';

const GoogleAILogo = () => (
    <svg width="100" height="40" viewBox="0 0 100 40" fill="currentColor" className="text-zinc-400" aria-label="Google AI Logo">
        <path d="M19.38 15.65c0-1.3-.11-2.55-.33-3.75H10v7.09h5.27c-.23 1.55-1.02 3.2-2.58 4.25v2.85h3.66c2.14-1.98 3.38-4.9 3.38-8.44z"/>
        <path d="M10 25c2.61 0 4.83-0.87 6.44-2.35l-3.66-2.85c-.87.58-1.99.92-3.28.92-2.52 0-4.66-1.7-5.42-3.98H1.02v2.95c1.64 3.25 4.8 5.46 8.98 5.46z"/>
        <path d="M4.58 16.71c-.2-.58-.32-1.2-.32-1.84s.12-1.26.32-1.84V10.1H1.02C0.37 11.37 0 12.87 0 14.87s.37 3.5 1.02 4.77l3.56-2.93z"/>
        <path d="M10 4.35c1.42 0 2.7.49 3.71 1.45l3.25-3.25C15.35 1.01 12.89 0 10 0 5.82 0 2.66 2.21 1.02 5.46l3.56 2.93c.76-2.28 2.9-3.98 5.42-3.98z"/>
        <text x="30" y="25" fontFamily="Poppins, sans-serif" fontSize="16" fontWeight="600">Google AI</text>
    </svg>
);

const VercelLogo = () => (
    <svg width="90" height="40" viewBox="0 0 90 40" fill="currentColor" className="text-zinc-400" aria-label="Vercel Logo">
        <path d="M18.75 0L0 32.5h37.5L18.75 0z"/>
        <text x="45" y="25" fontFamily="Poppins, sans-serif" fontSize="16" fontWeight="600">Vercel</text>
    </svg>
);


const Header: React.FC<{ onRegisterClick: () => void; }> = ({ onRegisterClick }) => {
  return (
    <header id="hero" className="min-h-screen flex flex-col bg-zinc-900 text-center">
        {/* Spacer for fixed nav/banner */}
        <div className="pt-20 md:pt-36"></div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white drop-shadow-lg animate-gradient-text bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                ThinkerRoot Ideathon 2025
            </h1>

            <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto animate-pulse-slow">
                A one-of-a-kind hackathon designed to nurture core innovation.
                Empowering developers, thinkers, and creators to build impactful
                solutions.
            </p>

            <button
                onClick={onRegisterClick}
                className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/20"
            >
                Register Now
            </button>
        </div>

        {/* Powered By Section */}
        <div className="pb-32 md:pb-8">
            <p className="text-sm text-zinc-500 mb-4 font-medium tracking-wider">POWERED BY</p>
            <div className="flex justify-center items-center gap-x-8 md:gap-x-12">
                <a href="https://ai.google/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity duration-300" aria-label="Google AI">
                    <GoogleAILogo />
                </a>
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity duration-300" aria-label="Vercel">
                    <VercelLogo />
                </a>
            </div>
        </div>
    </header>
  );
};

export default Header;