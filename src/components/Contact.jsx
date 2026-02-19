import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { userData } from '../data/portfolio';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState(''); // '', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5000/api/leads/external', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    source: 'Portfolio Website'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

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

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Social Links Column */}
                    <div className="space-y-6">
                        <motion.a
                            href={userData.social.email}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:bg-white/10 border-white/5"
                        >
                            <div className="p-3 bg-slate-700/30 rounded-full text-slate-300 group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Email Me</h3>
                                <span className="text-slate-400 text-sm">{userData.profile.email}</span>
                            </div>
                        </motion.a>

                        <motion.a
                            href={userData.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:bg-white/10 border-white/5"
                        >
                            <div className="p-3 bg-blue-900/20 rounded-full text-blue-400 group-hover:scale-110 transition-transform">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">LinkedIn</h3>
                                <span className="text-slate-400 text-sm">Connect professionally</span>
                            </div>
                        </motion.a>

                        <motion.a
                            href={userData.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:bg-white/10 border-white/5"
                        >
                            <div className="p-3 bg-gray-700/30 rounded-full text-white group-hover:scale-110 transition-transform">
                                <Github size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">GitHub</h3>
                                <span className="text-slate-400 text-sm">Checkout my code</span>
                            </div>
                        </motion.a>
                    </div>

                    {/* Contact Form Column */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="glass-card p-8 rounded-2xl border-white/5 space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${status === 'success'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gradient-to-r from-slate-700 to-gray-600 hover:from-slate-600 hover:to-gray-500 text-white shadow-lg'
                                }`}
                        >
                            {status === 'loading' ? (
                                <span>Sending...</span>
                            ) : status === 'success' ? (
                                <span>Message Sent!</span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </>
                            )}
                        </button>

                        {status === 'error' && (
                            <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
