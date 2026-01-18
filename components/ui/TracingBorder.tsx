import React from 'react';
import { motion } from 'framer-motion';

interface TracingBorderProps {
    children: React.ReactNode;
    className?: string;
    duration?: number;
}

export const TracingBorder: React.FC<TracingBorderProps> = ({
    children,
    className = "",
    duration = 3
}) => {
    return (
        <div className={`relative overflow-hidden rounded-3xl p-[1px] group ${className}`}>
            {/* Spinning Beam Gradient */}
            <motion.div
                className="absolute inset-[-50%]"
                style={{
                    background: 'conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 70%, #b3001b 80%, #a855f7 90%, transparent 100%)'
                    // Adjusted gradient: Multicolor beam from Brand Red to Cosmic Purple
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
            />

            {/* Background Mask to hide the center of the gradient */}
            <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-[23px] z-0" />

            {/* Content Container - Preserves original card transparency/styling */}
            <div className="relative z-10 h-full w-full rounded-[23px] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors p-px">
                {/* Determine padding in usage or pass it through */}
                {children}
            </div>
        </div>
    );
};
