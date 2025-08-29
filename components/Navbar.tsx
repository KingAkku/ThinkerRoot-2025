import React, { useState, useEffect } from 'react';

interface NavbarProps {
    onRegisterClick: () => void;
}

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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="font-display text-2xl font-bold text-white">
                        Thinker<span className="text-red-500">Root</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="text-zinc-300 hover:text-white transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <button 
                        onClick={onRegisterClick}
                        className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
                    >
                        Register
                    </button>
                     <div className="md:hidden">
                        {/* Mobile menu button could be added here */}
                        <button 
                            onClick={onRegisterClick}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md text-sm"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
