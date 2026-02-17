import React from 'react';
import { userData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
    const categories = [
        { key: 'frontend', icon: Code2, label: 'Frontend' },
        { key: 'backend', icon: Server, label: 'Backend' },
        { key: 'databases', icon: Database, label: 'Databases' },
        { key: 'ai_ml', icon: Brain, label: 'AI / ML' },
        { key: 'tools', icon: Wrench, label: 'Tools & DevOps' },
    ];

    return (
        <section id="skills" className="py-20 px-6 relative z-10">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-slate-400 mb-4 inline-block drop-shadow-sm">
                        Technical Arsenal
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.key}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 40px -10px rgba(203,213,225,0.1)" }}
                                className="glass-card p-8 rounded-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Icon size={80} className="text-slate-400" />
                                </div>

                                <div className="flex items-center mb-6 space-x-3 relative z-10">
                                    <div className="p-3 bg-slate-700/30 rounded-xl text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                                        {cat.label}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3 relative z-10">
                                    {userData.skills[cat.key].map((skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(34,211,238,0.1)" }}
                                            className="px-4 py-2 bg-white/5 text-slate-300 rounded-lg border border-white/10 text-sm font-medium transition-colors cursor-default hover:border-cyan-400/30 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
