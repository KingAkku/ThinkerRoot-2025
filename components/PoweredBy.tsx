import React from 'react';

const PoweredBy = () => {
    return (
        <div className="relative z-10 flex flex-col items-center gap-4 py-10">
            <p className="text-base text-zinc-400 tracking-wide">Powered by</p>
            <div className="flex items-center gap-12">
                <a 
                    href="#" 
                    aria-label="Lenient Tree"
                    className="p-2 transition-shadow duration-300 rounded-2xl hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                >
                    <img 
                        src="/lt.svg"
                        alt="Lenient Tree Logo" 
                        className="h-60 w-auto transition-transform duration-300 hover:scale-110" 
                    />
                </a>
                <a 
                    href="#" 
                    aria-label="ThinkerRoot Official Logo"
                    className="p-2 transition-shadow duration-300 rounded-2xl hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                >
                    <img 
                        src="/thinkerroot.svg"
                        alt="ThinkerRoot Official Logo" 
                        className="h-16 w-auto transition-transform duration-300 hover:scale-110" 
                    />
                </a>
            </div>
        </div>
    );
};

export default PoweredBy;