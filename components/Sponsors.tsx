import React from 'react';
import Section from './Section';
import { SPONSORS } from '../constants';

const Sponsors = () => {
    return (
        <div className="border-b border-zinc-800">
            <Section id="sponsors" title="Our Sponsors">
                <div className="max-w-5xl mx-auto">
                    <p className="text-center text-zinc-400 mb-12">
                        This event is made possible by the generous support of our sponsors.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                        {SPONSORS.map((sponsor) => (
                            <div 
                                key={sponsor.name}
                                className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 p-2 border-2 border-transparent hover:border-zinc-600 rounded-xl"
                                aria-label={`Sponsor: ${sponsor.name}`}
                            >
                               {sponsor.logo}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Sponsors;