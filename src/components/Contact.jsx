import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { userData } from '../data/portfolio';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
            {/* Background glow for contact section - Steel/Cyan */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-slate-400">Connect</span>
                    </h2>

                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    <motion.a
                        href={userData.social.email}
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/10 border-white/5"
                    >
                        <div className="p-4 bg-slate-700/30 rounded-full text-slate-300 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(203,213,225,0.1)]">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">Email Me</h3>
                        <span className="text-slate-400 text-sm group-hover:text-cyan-300 transition-colors">{userData.profile.email}</span>
                    </motion.a>

                    <motion.a
                        href={userData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/10 border-white/5"
                    >
                        <div className="p-4 bg-blue-900/20 rounded-full text-blue-400 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                            <Linkedin size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                        <span className="text-slate-400 text-sm group-hover:text-blue-300 transition-colors">Connect professionally</span>
                    </motion.a>

                    <motion.a
                        href={userData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/10 border-white/5"
                    >
                        <div className="p-4 bg-gray-700/30 rounded-full text-white mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            <Github size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
                        <span className="text-slate-400 text-sm group-hover:text-white transition-colors">Checkout my code</span>
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a href={`mailto:${userData.profile.email}`} className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-slate-700 to-gray-600 hover:from-slate-600 hover:to-gray-500 rounded-full text-white font-bold shadow-lg shadow-gray-900/40 hover:scale-105 transition-transform border border-white/10">
                        <span>Send a Message</span>
                        <Send size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
