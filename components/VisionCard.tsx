import React from 'react';

interface VisionCardProps {
    title: string;
    description: string;
}

const VisionCard = ({ title, description }: VisionCardProps) => {
    return (
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1">
            <h3 className="font-display text-2xl font-bold text-sky-400 mb-2">{title}</h3>
            <p className="text-slate-300">{description}</p>
        </div>
    );
};

export default VisionCard;