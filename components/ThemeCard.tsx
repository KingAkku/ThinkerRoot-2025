import React from 'react';

interface ThemeCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ThemeCard = ({ icon, title, description }: ThemeCardProps) => {
    return (
        <div className="group relative bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 hover:border-zinc-600">
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
                <div className="text-red-400 mb-4 h-8 w-8">
                    {icon}
                </div>
                <h3 className="font-display text-xl font-bold text-zinc-100 mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ThemeCard;