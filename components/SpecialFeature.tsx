import React from 'react';

interface SpecialFeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const SpecialFeature = ({ icon, title, description }: SpecialFeatureProps) => {
    return (
        <div className="flex items-start space-x-6 bg-slate-800/30 p-6 rounded-lg border border-slate-700 transition-all duration-300 hover:border-indigo-400 hover:bg-slate-800/50">
            <div className="flex-shrink-0 bg-indigo-500/20 text-indigo-300 rounded-lg p-3">
                <div className="w-8 h-8">{icon}</div>
            </div>
            <div>
                <h3 className="font-display text-2xl font-bold text-slate-100">{title}</h3>
                <p className="mt-1 text-slate-300">{description}</p>
            </div>
        </div>
    );
};

export default SpecialFeature;