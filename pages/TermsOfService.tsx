import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service | 1n1scalez</title>
                <meta name="description" content="Terms of Service for 1n1scalez - Read our terms and conditions for using our services." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <Header />

            <main className="relative z-10 pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                        <p className="text-gray-400">Last Updated: January 18, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <div className="space-y-8 text-gray-300 leading-relaxed">

                            {/* Introduction */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                                <p>
                                    These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and 1n1scalez ("Company," "we," "our," or "us") regarding your use of our website, services, and client acquisition systems.
                                </p>
                                <p>
                                    By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
                                </p>
                            </section>

                            {/* Services Description */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
                                <p>
                                    1n1scalez provides automated client acquisition systems for service-based businesses, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Lead generation system design and implementation</li>
                                    <li>CRM automation and workflow setup</li>
                                    <li>Website development and optimization</li>
                                    <li>Sales funnel creation and management</li>
                                    <li>Marketing infrastructure and automation</li>
                                    <li>Strategy consulting and business growth advisory</li>
                                </ul>
                                <p className="mt-3">
                                    The specific scope of services will be defined in a separate agreement, proposal, or statement of work ("SOW") provided to you.
                                </p>
                            </section>

                            {/* Eligibility */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Eligibility</h2>
                                <p>
                                    You must be at least 18 years old and have the legal authority to enter into these Terms on behalf of yourself or your business. By using our services, you represent and warrant that you meet these eligibility requirements.
                                </p>
                            </section>

                            {/* Account Registration */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Account Registration and Security</h2>
                                <p>
                                    To access certain features of our services, you may be required to create an account. You agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide accurate, current, and complete information during registration</li>
                                    <li>Maintain and promptly update your account information</li>
                                    <li>Maintain the security and confidentiality of your login credentials</li>
                                    <li>Notify us immediately of any unauthorized access or security breach</li>
                                    <li>Accept responsibility for all activities that occur under your account</li>
                                </ul>
                                <p className="mt-3">
                                    We reserve the right to suspend or terminate your account if we suspect fraudulent, abusive, or illegal activity.
                                </p>
                            </section>

                            {/* Payment Terms */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Fees and Pricing</h3>
                                <p>
                                    Service fees will be specified in your proposal or SOW. All fees are quoted in U.S. Dollars unless otherwise stated. We reserve the right to modify our pricing with reasonable notice to existing clients.
                                </p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Payment Schedule</h3>
                                <p>
                                    Payment terms will be outlined in your agreement and may include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Upfront deposits or retainers</li>
                                    <li>Milestone-based payments</li>
                                    <li>Monthly recurring fees</li>
                                    <li>Project completion payments</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Late Payments</h3>
                                <p>
                                    Payments are due as specified in your agreement. Late payments may result in:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Suspension of services until payment is received</li>
                                    <li>Late fees as permitted by law</li>
                                    <li>Termination of the agreement</li>
                                    <li>Collection efforts and associated costs</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Refunds</h3>
                                <p>
                                    All sales are final unless otherwise specified in your agreement. Refund eligibility will be determined on a case-by-case basis and must be requested in writing.
                                </p>
                            </section>

                            {/* Client Responsibilities */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
                                <p>
                                    To ensure successful project delivery, you agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide timely feedback, approvals, and access to necessary resources</li>
                                    <li>Provide accurate business information and marketing materials</li>
                                    <li>Respond to requests for information within agreed timeframes</li>
                                    <li>Designate a primary point of contact for project communication</li>
                                    <li>Ensure that all provided content complies with applicable laws</li>
                                    <li>Maintain any systems or platforms we integrate with</li>
                                </ul>
                                <p className="mt-3">
                                    Delays in client deliverables may result in project timeline extensions and potential additional fees.
                                </p>
                            </section>

                            {/* Intellectual Property */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Our Property</h3>
                                <p>
                                    We retain all rights, title, and interest in:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Our proprietary methodologies, frameworks, and processes</li>
                                    <li>Pre-existing templates, tools, and resources</li>
                                    <li>Our brand, trademarks, and marketing materials</li>
                                    <li>Any intellectual property developed independently</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Your Property</h3>
                                <p>
                                    You retain ownership of:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Your brand, trademarks, and pre-existing materials</li>
                                    <li>Content and information you provide to us</li>
                                    <li>Custom deliverables created specifically for you (upon full payment)</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">License Grant</h3>
                                <p>
                                    Upon full payment, we grant you a non-exclusive, non-transferable license to use the deliverables for your business purposes. We retain the right to showcase our work in our portfolio and marketing materials unless otherwise agreed.
                                </p>
                            </section>

                            {/* Acceptable Use */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use Policy</h2>
                                <p>
                                    You agree not to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Use our services for any illegal or unauthorized purpose</li>
                                    <li>Violate any laws, regulations, or third-party rights</li>
                                    <li>Transmit harmful code, viruses, or malicious software</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Interfere with or disrupt our services or servers</li>
                                    <li>Reverse engineer or copy our proprietary methods</li>
                                    <li>Use our services to spam, harass, or deceive others</li>
                                    <li>Impersonate any person or entity</li>
                                </ul>
                            </section>

                            {/* Warranties and Disclaimers */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Warranties and Disclaimers</h2>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Our Commitment</h3>
                                <p>
                                    We commit to providing our services with reasonable skill and care in accordance with industry standards. However, we do not guarantee specific results, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Specific number of leads or sales</li>
                                    <li>Revenue targets or growth metrics</li>
                                    <li>Search engine rankings or traffic levels</li>
                                    <li>Conversion rates or customer acquisition costs</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Disclaimer</h3>
                                <p>
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                                </p>
                                <p className="mt-3">
                                    We do not warrant that our services will be uninterrupted, error-free, or completely secure. Your use of our services is at your own risk.
                                </p>
                            </section>

                            {/* Limitation of Liability */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                                <p>
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL 1N1SCALEZ, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                                    <li>LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES</li>
                                    <li>COST OF PROCUREMENT OF SUBSTITUTE SERVICES</li>
                                    <li>DAMAGES RESULTING FROM YOUR USE OR INABILITY TO USE OUR SERVICES</li>
                                </ul>
                                <p className="mt-3">
                                    OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE CLAIM.
                                </p>
                                <p className="mt-3">
                                    Some jurisdictions do not allow the exclusion of certain warranties or limitations on liability. In such cases, our liability will be limited to the maximum extent permitted by law.
                                </p>
                            </section>

                            {/* Indemnification */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                                <p>
                                    You agree to indemnify, defend, and hold harmless 1n1scalez and its affiliates from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Your use of our services</li>
                                    <li>Your violation of these Terms</li>
                                    <li>Your violation of any third-party rights</li>
                                    <li>Content or information you provide to us</li>
                                    <li>Your business activities or marketing practices</li>
                                </ul>
                            </section>

                            {/* Termination */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Termination by Either Party</h3>
                                <p>
                                    Either party may terminate the service agreement with written notice as specified in your SOW. Termination terms may include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Notice period requirements (typically 30 days)</li>
                                    <li>Payment for work completed to date</li>
                                    <li>Return or deletion of confidential information</li>
                                    <li>Delivery of completed work products</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Immediate Termination</h3>
                                <p>
                                    We reserve the right to immediately terminate or suspend services if:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>You violate these Terms or applicable laws</li>
                                    <li>Payment obligations are not met</li>
                                    <li>You engage in fraudulent or abusive behavior</li>
                                    <li>Continuation poses legal or reputational risk</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Effect of Termination</h3>
                                <p>
                                    Upon termination:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>You must pay all outstanding fees and charges</li>
                                    <li>Your access to our services will be revoked</li>
                                    <li>Provisions that by nature should survive will remain in effect</li>
                                    <li>Neither party will have further obligations except as specified</li>
                                </ul>
                            </section>

                            {/* Confidentiality */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
                                <p>
                                    Both parties agree to maintain confidentiality of proprietary information shared during the business relationship. This includes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Business strategies, financial information, and trade secrets</li>
                                    <li>Customer lists, pricing, and proprietary methodologies</li>
                                    <li>Technical information and system architectures</li>
                                    <li>Any information marked as confidential</li>
                                </ul>
                                <p className="mt-3">
                                    Confidentiality obligations do not apply to information that is publicly available, independently developed, or required to be disclosed by law.
                                </p>
                            </section>

                            {/* Modifications */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Modifications to Terms</h2>
                                <p>
                                    We reserve the right to modify these Terms at any time. We will provide notice of material changes by:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Updating the "Last Updated" date at the top of this page</li>
                                    <li>Posting a notice on our website</li>
                                    <li>Sending an email notification (for active clients)</li>
                                </ul>
                                <p className="mt-3">
                                    Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
                                </p>
                            </section>

                            {/* Governing Law */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Governing Law and Dispute Resolution</h2>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Governing Law</h3>
                                <p>
                                    These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
                                </p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Dispute Resolution</h3>
                                <p>
                                    In the event of any dispute, both parties agree to first attempt resolution through good-faith negotiations. If negotiations fail, disputes may be resolved through:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Mediation by a mutually agreed mediator</li>
                                    <li>Binding arbitration under the rules of the American Arbitration Association</li>
                                    <li>Litigation in courts of competent jurisdiction as a last resort</li>
                                </ul>
                            </section>

                            {/* Miscellaneous */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Miscellaneous Provisions</h2>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Entire Agreement</h3>
                                <p>
                                    These Terms, together with any SOW or agreement, constitute the entire agreement between you and 1n1scalez regarding the services.
                                </p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Severability</h3>
                                <p>
                                    If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                                </p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Waiver</h3>
                                <p>
                                    Our failure to enforce any right or provision of these Terms will not constitute a waiver of such right or provision.
                                </p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Assignment</h3>
                                <p>
                                    You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.
                                </p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Force Majeure</h3>
                                <p>
                                    Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including natural disasters, war, terrorism, labor disputes, or government actions.
                                </p>
                            </section>

                            {/* Contact */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                                <p>
                                    If you have any questions about these Terms of Service, please contact us at:
                                </p>
                                <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-xl">
                                    <p className="font-semibold text-white">1n1scalez</p>
                                    <p className="mt-2">Email: <a href="mailto:legal@1n1scalez.com" className="text-purple-400 hover:text-purple-300 transition-colors">legal@1n1scalez.com</a></p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default TermsOfService;
