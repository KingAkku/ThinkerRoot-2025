import React from 'react';

const Header = () => {
    return (
        <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-slate-900 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(7,89,133,0.4),_transparent_40%)]"></div>

            <div className="relative z-10 space-y-6">
                 <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-gradient-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                    ThinkerRoot Ideathon 2025
                </h1>

                <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
                    A one of a kind hackathon designed to nurture core innovation. Empowering developers, thinkers, and creators to build impactful solutions.
                </p>

                <div className="flex justify-center pt-4">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/20">
                        Join The Waitlist
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;