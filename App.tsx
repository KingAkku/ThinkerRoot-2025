import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ThemeCard from './components/ThemeCard';
import SpecialFeature from './components/SpecialFeature';
import VisionCard from './components/VisionCard';
import Footer from './components/Footer';
import { HACKATHON_THEMES, SPECIAL_FEATURES, VISION_POINTS } from './constants';

const App = () => {
    return (
        <div className="bg-slate-900 text-white font-sans leading-relaxed overflow-x-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.15)_0%,rgba(29,78,216,0)_50%)] z-0"></div>

            <div className="relative z-10">
                <Header />

                <main>
                    {/* Vision Section */}
                    <Section id="vision" title="Our Vision">
                        <div className="grid md:grid-cols-3 gap-8">
                            {VISION_POINTS.map((point, index) => (
                                <VisionCard key={index} {...point} />
                            ))}
                        </div>
                    </Section>

                    {/* Themes Section */}
                    <Section id="themes" title="6 Groundbreaking Themes">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {HACKATHON_THEMES.map((theme, index) => (
                                <ThemeCard key={index} {...theme} />
                            ))}
                        </div>
                    </Section>

                    {/* Special Features Section */}
                    <Section id="special" title="What Makes ThinkerRoot Special?">
                        <div className="max-w-4xl mx-auto space-y-8">
                            {SPECIAL_FEATURES.map((feature, index) => (
                                <SpecialFeature key={index} {...feature} />
                            ))}
                        </div>
                    </Section>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default App;
