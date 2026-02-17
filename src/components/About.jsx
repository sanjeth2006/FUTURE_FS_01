import React from 'react';
import { userData } from '../data/portfolio';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card max-w-4xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Decorative gradient blob */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 text-center space-y-8">
                        <div>
                            <h2 className="text-xl md:text-2xl font-medium text-cyan-300/80 mb-2">Hello, I'm</h2>
                            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-400 tracking-tight mb-4 drop-shadow-sm">
                                {userData.profile.name}
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
                            {userData.profile.bio}
                        </p>

                        <div className="flex justify-center gap-6 pt-8">
                            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-slate-700 to-gray-600 hover:from-slate-600 hover:to-gray-500 text-white font-semibold shadow-lg shadow-gray-900/50 transition-all hover:scale-105 border border-white/10">
                                View Work
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
