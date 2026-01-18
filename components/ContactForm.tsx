import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  revenue: string;
  adBudget: string;
  closingRate: string;
}

const TOTAL_STEPS = 5;

export const ContactForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    revenue: '',
    adBudget: '',
    closingRate: ''
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      (function (C: any, A, L) { let p = function (a: any, ar: any) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

      (window as any).Cal("init", "free-15-minute-strategy-call-1n1scalez", { origin: "https://app.cal.com" });

      (window as any).Cal.ns["free-15-minute-strategy-call-1n1scalez"]("inline", {
        elementOrSelector: "#my-cal-inline-free-15-minute-strategy-call-1n1scalez",
        config: { "layout": "month_view" },
        calLink: "1n1scalez/free-15-minute-strategy-call-1n1scalez",
      });

      (window as any).Cal.ns["free-15-minute-strategy-call-1n1scalez"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    }
  }, [showModal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    // Determine source from URL or default
    const source = new URLSearchParams(window.location.search).get("utm_source") || "Direct";

    // Prepare payload
    const payload = {
      ...formData,
      source,
      submittedAt: new Date().toISOString()
    };

    try {
      // Send data to webhook
      await fetch("https://services.leadconnectorhq.com/hooks/WbspWwMzaTKqnIz9Frlu/webhook-trigger/7a17718b-9362-4f1c-a8de-ca78ced6a158", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error("Webhook submission failed:", error);
      // We still proceed to show the modal even if the webhook fails
    }

    // Show Success Modal
    setShowModal(true);
  };

  // Helper to determine if we can proceed
  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.firstName.trim() !== '' && formData.lastName.trim() !== '';
      case 2: return formData.email.trim() !== '' && formData.phone.trim() !== '';
      case 3: return formData.revenue !== '';
      case 4: return formData.adBudget !== '';
      case 5: return formData.closingRate !== '';
      default: return false;
    }
  };

  return (
    <section id="contact-form" className="py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#3b82f6]/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#9333ea]/10 blur-[100px] rounded-full" />

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0f1115] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl h-[80vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div>
                  <h3 className="text-xl font-bold text-white">Your Growth Strategy is Ready</h3>
                  <p className="text-sm text-gray-400">Schedule your session to unlock your lead flow.</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              {/* Embed Container - PLACE YOUR EMBED CODE HERE */}
              <div className="flex-1 w-full bg-[#0f1115] relative overflow-hidden">
                <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-free-15-minute-strategy-call-1n1scalez"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            See Your Future <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Revenue</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Answer 5 simple questions to see exactly how many qualified leads we can add to your pipeline this month.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-[#0f1115]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden">

          {/* Progress Bar */}
          <div className="h-1 w-full bg-white/5 absolute top-0 left-0">
            <motion.div
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-8 md:p-12">

            {/* Step Indicator */}
            <div className="flex flex-col items-center mb-8">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  {currentStep === 1 && "Let's start with your name"}
                  {currentStep === 2 && "How can we contact you?"}
                  {currentStep === 3 && "Current Monthly Revenue"}
                  {currentStep === 4 && "Monthly Ad Budget"}
                  {currentStep === 5 && "Approximate Closing Rate"}
                </motion.h3>
              </AnimatePresence>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Question {currentStep} of {TOTAL_STEPS}</span>
            </div>

            {/* Content Area */}
            <div className="min-h-[200px] mb-8 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500/50 focus:bg-white/10 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500/50 focus:bg-white/10 transition-all outline-none"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500/50 focus:bg-white/10 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500/50 focus:bg-white/10 transition-all outline-none"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto w-full"
                  >
                    {['< $20k/mo', '$20k - $50k/mo', '$50k - $100k/mo', '$100k/mo+'].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect('revenue', option)}
                        className={`p-4 rounded-xl border transition-all text-left flex items-center justify-between group ${formData.revenue === option
                          ? 'bg-blue-500/20 border-blue-500 text-white'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                          }`}
                      >
                        <span className="font-medium">{option}</span>
                        {formData.revenue === option && <Check size={18} className="text-blue-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto w-full"
                  >
                    {['< $1,500', '$1,500 - $5,000', '$5,000 - $10,000', '$10,000+'].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect('adBudget', option)}
                        className={`p-4 rounded-xl border transition-all text-left flex items-center justify-between group ${formData.adBudget === option
                          ? 'bg-blue-500/20 border-blue-500 text-white'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                          }`}
                      >
                        <span className="font-medium">{option}</span>
                        {formData.adBudget === option && <Check size={18} className="text-blue-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}

                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto w-full"
                  >
                    {['Unknown', '< 10%', '10% - 25%', '> 25%'].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect('closingRate', option)}
                        className={`p-4 rounded-xl border transition-all text-left flex items-center justify-between group ${formData.closingRate === option
                          ? 'bg-blue-500/20 border-blue-500 text-white'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                          }`}
                      >
                        <span className="font-medium">{option}</span>
                        {formData.closingRate === option && <Check size={18} className="text-blue-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer / Navigation */}
            <div className={`flex items-center mt-8 border-t border-white/10 pt-6 ${currentStep === 1 ? 'justify-center md:justify-end' : 'justify-between'}`}>
              <button
                onClick={prevStep}
                className={`text-sm font-medium text-gray-400 hover:text-white transition-colors items-center gap-1 ${currentStep === 1 ? 'hidden' : 'flex opacity-100'}`}
              >
                <ChevronLeft size={16} />
                Back
              </button>

              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all transform flex items-center gap-2 ${canProceed()
                  ? 'bg-white text-black hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'
                  }`}
              >
                {currentStep === 1 ? 'Start My Roadmap' : (currentStep === TOTAL_STEPS ? 'Reveal My Roadmap' : 'Next Step')}
                {currentStep !== TOTAL_STEPS && <ChevronRight size={16} />}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
