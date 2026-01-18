import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="mb-4">
            <button
                onClick={toggleOpen}
                className="w-full flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl transition-all text-left group"
            >
                <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{question}</span>
                {isOpen ? (
                    <ChevronUp className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-2 text-gray-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How quickly can I expect to start seeing leads?",
            answer: "We typically launch your acquisition system within 7-10 days. Once live, most clients see their first qualified appointments booked within the first 48 hours. Our goal is to fill your pipeline immediately, not months from now."
        },
        {
            question: "What industries do you specialize in?",
            answer: "We focus exclusively on high-ticket service businesses—specifically Contractors, Photographers, Consultants, and Agencies. If you sell a high-value service, our infrastructure is built to scale it."
        },
        {
            question: "Do I need a huge ad budget to make this work?",
            answer: "Not effectively. We construct our systems to be high-efficiency. We recommend a starting budget that allows for statistically significant data (typically $1,500-$3,000/mo depends on niche), but we optimize for ROI from day one."
        },
        {
            question: "What differentiates a 'qualified' lead from a regular lead?",
            answer: "We don't just send you name and email. Our systems qualify prospects based on budget, timeline, and specific needs before they ever reach your calendar. You only speak to people who are ready and able to buy."
        },
        {
            question: "Is there a guarantee regarding results?",
            answer: "Yes. We work on a performance basis for our partner plans. If we don't hit the guaranteed number of qualified appointments or revenue targets we agree upon, we work for free until we do."
        },
        {
            question: "Do I have to manage the ads myself?",
            answer: "Zero management required. We handle the creative, the copy, the targeting, and the optimization. You simply check your calendar and close the deals."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-black relative z-10">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">FAQs</h2>
                </div>

                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggleOpen={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
