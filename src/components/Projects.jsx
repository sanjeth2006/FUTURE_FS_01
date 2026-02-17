import React from 'react';
import { userData } from '../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 relative z-10">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-slate-400 mb-4 inline-block drop-shadow-sm">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {userData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(203,213,225,0.15)] group relative"
                        >
                            {/* Inner Glow Border Effect - Cyan/Silver */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/20 rounded-2xl transition-colors duration-300 pointer-events-none z-20"></div>

                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all"
                                />
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-sm">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all border border-white/10" title="View Code">
                                        <Github className="text-white" size={24} />
                                    </a>
                                    {project.demo !== "#" && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all border border-white/10" title="Live Demo">
                                            <ExternalLink className="text-white" size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                {Array.isArray(project.description) ? (
                                    <ul className="text-slate-300 text-sm mb-6 flex-1 list-disc list-outside ml-4 space-y-2 font-light">
                                        {project.description.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-slate-300 text-sm mb-6 flex-1 font-light">
                                        {project.description}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-200 rounded-full border border-slate-600/50 shadow-[0_0_10px_rgba(203,213,225,0.05)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
