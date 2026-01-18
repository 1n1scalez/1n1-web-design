import React from 'react';
import { motion } from 'framer-motion';
import { Users, Filter, CalendarCheck2, ArrowDown } from 'lucide-react';

export const ArchitectSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b3001b]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: The "Engine" Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-[#0f1115] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden flex flex-col gap-6">

                            {/* Step 1: Inbound Traffic */}
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 relative">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Lead Generation</div>
                                    <div className="text-xs text-gray-400">High-intent prospects for your offer</div>
                                </div>
                            </div>

                            {/* Connector Arrow */}
                            <div className="flex justify-center -my-3 relative z-10">
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-gray-600"
                                >
                                    <ArrowDown size={20} />
                                </motion.div>
                            </div>

                            {/* Step 2: The Filter */}
                            <div className="flex items-center gap-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20 relative">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Filter size={24} />
                                </div>
                                <div>
                                    <div className="text-white font-bold">CRM Infrastructure</div>
                                    <div className="text-xs text-purple-200/70">Full setup, automation & nurturing</div>
                                </div>
                            </div>

                            {/* Connector Arrow */}
                            <div className="flex justify-center -my-3 relative z-10">
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    className="text-gray-600"
                                >
                                    <ArrowDown size={20} />
                                </motion.div>
                            </div>

                            {/* Step 3: Result */}
                            <div className="flex items-center gap-4 p-4 bg-[#b3001b]/10 rounded-xl border border-[#b3001b]/20 relative">
                                <div className="w-12 h-12 rounded-full bg-[#b3001b]/20 flex items-center justify-center text-[#ff4d4d]">
                                    <CalendarCheck2 size={24} />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Revenue-Ready Calls</div>
                                    <div className="text-xs text-red-200/70">Qualified meetings directly in your calendar</div>
                                </div>
                            </div>

                            {/* Overall Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-[#b3001b]/5 pointer-events-none" />

                        </div>

                        {/* Decorative Pulse */}
                        <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#b3001b]/10 rounded-full blur-2xl animate-pulse" />
                    </motion.div>

                    {/* Right Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            We Don't Guess.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b3001b] to-purple-500">We Architect.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Most agencies simply run generic ads and hope for the best. We build a complete <strong>Client Acquisition & CRM Engine</strong> custom-tailored to your business.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            From precision targeting to <strong>full CRM setup</strong> and automated follow-up, we construct the tech infrastructure that turns cold strangers into high-value sales calls on autopilot.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
