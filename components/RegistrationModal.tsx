import React from 'react';
import { HACKATHON_THEMES } from '../constants';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
        onClose(); // Close modal after submission
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="bg-zinc-800 rounded-lg shadow-2xl shadow-red-900/20 p-8 w-full max-w-md border border-zinc-700 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
                    aria-label="Close registration form"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <h2 className="font-display text-3xl font-bold text-red-400 mb-6 text-center">Register Your Interest</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">Full Name</label>
                        <input type="text" id="name" name="name" required className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors" />
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">Email Address</label>
                        <input type="email" id="email" name="email" required className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors" />
                    </div>
                     <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-zinc-300 mb-1">Primary Area of Interest</label>
                        <select id="interest" name="interest" required className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors">
                            <option value="">Select a theme...</option>
                            {HACKATHON_THEMES.map(theme => (
                                <option key={theme.title} value={theme.title}>{theme.title}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105">Book My Seat</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationModal;