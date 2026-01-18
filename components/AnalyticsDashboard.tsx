import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

export const AnalyticsDashboard: React.FC = () => {
    return (
        <div className="w-full max-w-5xl mx-auto relative group">
            {/* Static Border Background */}
            <div className="absolute inset-[1px] bg-[#0f1115] rounded-[22px] z-0" />

            {/* Main Content Card */}
            <div className="relative z-10 bg-[#0f1115]/90 rounded-[22px] p-6 md:p-8 w-full border border-white/5 overflow-hidden">

                {/* Top Header - Live Indicator */}
                <div className="flex justify-center md:justify-end mb-8">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest">Live Revenue Tracking</span>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

                    {/* 1. Profile Card (Top Left) */}
                    <div className="md:col-span-1 bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-row md:flex-col items-center gap-4 text-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                            <img src="/JayHutchLogo.webp" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left md:text-center">
                            <h3 className="text-white font-bold text-sm md:text-base">Jayhutchh</h3>
                            <span className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-0.5 rounded-full">Top 1% Growth</span>
                        </div>
                    </div>

                    {/* 2. Total Revenue Card */}
                    <div className="md:col-span-1 bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Total Revenue</span>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">$19,200</div>
                            <div className="flex items-center gap-1 text-[10px] md:text-xs text-green-400 font-medium">
                                <TrendingUp size={12} />
                                <span>12% vs last month</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Pipeline Value Card */}
                    <div className="md:col-span-1 bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Pipeline Value</span>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">$34,800</div>
                            <div className="flex items-center gap-1 text-[10px] md:text-xs text-green-400 font-medium">
                                <TrendingUp size={12} />
                                <span>8% vs last month</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. Booked Calls Card */}
                    <div className="md:col-span-1 bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Booked Calls</span>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">48</div>
                            <div className="flex items-center gap-1 text-[10px] md:text-xs text-green-400 font-medium">
                                <TrendingUp size={12} />
                                <span>24% vs last month</span>
                            </div>
                        </div>
                    </div>

                    {/* 5. Weekly Growth Graph (Bottom, spanning full width minus profile col if desktop, or simplified) */}
                    <div className="md:col-span-4 bg-white/5 border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                        <div className="relative z-10 flex justify-between items-start mb-4">
                            <div>
                                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Weekly Growth</span>
                                <div className="text-4xl font-bold text-white">+24.5%</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                                <TrendingUp size={20} />
                            </div>
                        </div>

                        {/* Fake Graph Visualization */}
                        <div className="h-24 w-full flex items-end justify-between gap-1 md:gap-2 mt-4 opacity-50">
                            {[30, 45, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    className="w-full bg-gradient-to-t from-[#b3001b]/20 to-green-400 rounded-t-sm"
                                />
                            ))}
                        </div>

                        {/* Background Glow Effect */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full pointer-events-none" />
                    </div>

                </div>
            </div>
        </div>
    );
};
