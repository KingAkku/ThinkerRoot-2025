import React from 'react';

interface HeaderProps {
    onRegisterClick: () => void;
}

const ThinkerRootLogo = () => (
    <div className="w-12 h-12 rounded bg-zinc-800/50 flex items-center justify-center ring-1 ring-zinc-700 transition-transform duration-300 hover:scale-110 p-2">
        <img src="/logo/ThinkerRoot.png" alt="ThinkerRoot Official Logo" className="w-full h-full" />
    </div>
);


const Header = ({ onRegisterClick }: HeaderProps) => {
    return (
        <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-zinc-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.15),_transparent_40%)]"></div>

            <div className="relative z-10 space-y-6">
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

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
                <p className="text-base text-zinc-400 tracking-wide">Powered by</p>
                <div className="flex items-center gap-6">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Lenient Tree">
                        <img 
                            src="lenient-tree.png"
                            alt="Lenient Tree Logo" 
                            className="w-12 h-12 rounded transition-transform duration-300 hover:scale-110" 
                        />
                    </a>
                     <a href="#" aria-label="ThinkerRoot Official Logo">
                        <ThinkerRootLogo />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;