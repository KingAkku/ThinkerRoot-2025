import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 mt-20 py-8 px-4">
            <div className="max-w-7xl mx-auto text-center text-slate-400">
                <p className="font-display text-lg mb-2">ThinkerRoot Ideathon 2025</p>
                <p>&copy; {new Date().getFullYear()} ThinkerRoot. All rights reserved.</p>
                <p className="text-sm mt-4">Nurturing Core Innovation for a Better Tomorrow.</p>
            </div>
        </footer>
    );
};

export default Footer;