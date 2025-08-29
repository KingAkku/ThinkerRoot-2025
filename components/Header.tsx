import React from 'react';

interface HeaderProps {
    onRegisterClick: () => void;
}

const Header = ({ onRegisterClick }: HeaderProps) => {
    return (
        <header className="relative min-h-screen flex flex-col items-center text-center px-4 overflow-hidden pt-20 md:pt-36">
            {/* Background Grid + Radial Glow */}
            <div className="absolute inset-0 w-full h-full bg-zinc-900 
                bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
                linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
                bg-[size:14px_24px] 
                [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]">
            </div>
            <div className="relative z-10 space-y-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.15),_transparent_40%)]"></div>
            
            {/* Hero Section */}
            <div className="flex-grow flex items-center justify-center">
                <div className="relative z-10 space-y-8">
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-gradient-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                        ThinkerRoot Ideathon 2025
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-300">
                        A one of a kind hackathon designed to nurture core innovation. Empowering developers, thinkers, and creators to build impactful solutions.
                    </p>

                    <div className="flex justify-center pt-4">
                        <button 
                            onClick={onRegisterClick}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/20"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Powered By Section */}
            <div className="flex-shrink-0 relative z-10 flex flex-col items-center gap-4 pb-10 mt-16">
                {/* ↑ added mt-16 here for extra spacing */}
                <p className="text-base text-zinc-400 tracking-wide">Powered by</p>
                <div className="flex items-center gap-12">
                    <a href="#" aria-label="Lenient Tree">
                        <img 
                            src="/lt.svg"
                            alt="Lenient Tree Logo" 
                            className="h-60 w-auto transition-transform duration-300 hover:scale-110" 
                        />
                    </a>
                    <a href="#" aria-label="ThinkerRoot Official Logo">
                        <img 
                            src="/thinkerroot.svg"
                            alt="ThinkerRoot Official Logo" 
                            className="h-16 w-auto transition-transform duration-300 hover:scale-110" 
                        />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
