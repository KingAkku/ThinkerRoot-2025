import React from 'react';

interface VisionCardProps {
    title: string;
    description: string;
}

const VisionCard = ({ title, description }: VisionCardProps) => {
    return (
        <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1">
            <h3 className="font-display text-2xl font-bold text-red-400 mb-2">{title}</h3>
            <p className="text-zinc-300">{description}</p>
        </div>
    );
};

export default VisionCard;