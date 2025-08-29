import React, { useState, useEffect } from 'react';

interface NavbarProps {
    onRegisterClick: () => void;
}

// Icons for the mobile pill nav
const VisionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
const ThemesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>;
const FeaturesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 4.8-4.8 1.9 4.8 1.9L12 16l1.9-4.8 4.8-1.9-4.8-1.9z"/><path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><line x1="10" x2="14" y1="12" y2="12"/></svg>;
const RegisterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8"/><line x1="22" x2="16" y1="11"/><line x1="19" x2="19" y1="14"/></svg>;


const Navbar = ({ onRegisterClick }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#vision', label: 'Vision' },
        { href: '#themes', label: 'Themes' },
        { href: '#special', label: 'Features' },
    ];
    
    const mobileNavLinks = [
        { href: '#vision', label: 'Vision', icon: <VisionIcon /> },
        { href: '#themes', label: 'Themes', icon: <ThemesIcon /> },
        { href: '#special', label: 'Features', icon: <FeaturesIcon /> },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-zinc-900/80 backdrop-blur-sm border-zinc-800' : 'bg-transparent border-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex items-center h-20">
                        {/* Left side */}
                        <div className="flex-1 flex justify-start">
                             <a href="#" className="font-display text-2xl font-bold text-white">
                                Thinker<span className="text-red-500">Root</span>
                            </a>
                        </div>

                        {/* Center */}
                        <div className="flex-none">
                             <div className="flex items-center space-x-8">
                                {navLinks.map(link => (
                                    <a key={link.href} href={link.href} className="text-zinc-300 hover:text-white transition-colors duration-300">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="flex-1 flex justify-end">
                            <button 
                                onClick={onRegisterClick}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Pill Navigation */}
            <nav className="md:hidden fixed bottom-4 inset-x-0 z-50 px-5">
                 <div className="flex items-center justify-around w-full gap-x-2 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-full shadow-lg shadow-black/30 p-3">
                    {mobileNavLinks.map(link => (
                         <a 
                            key={link.href}
                            href={link.href} 
                            className="flex flex-col items-center justify-center text-zinc-400 hover:text-red-400 w-20 h-14 rounded-full transition-colors duration-300"
                            aria-label={link.label}
                        >
                            <div className="w-7 h-7">{link.icon}</div>
                            <span className="text-xs mt-2">{link.label}</span>
                         </a>
                    ))}
                     <button 
                        onClick={onRegisterClick}
                        className="flex flex-col items-center justify-center text-zinc-400 bg-red-600/20 hover:text-white hover:bg-red-600 w-20 h-14 rounded-full transition-all duration-300"
                        aria-label="Register"
                    >
                        <div className="w-7 h-7"><RegisterIcon /></div>
                        <span className="text-xs mt-2">Register</span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;