import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | 1n1scalez</title>
                <meta name="description" content="Privacy Policy for 1n1scalez - Learn how we collect, use, and protect your personal information." />
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                        <p className="text-gray-400">Last Updated: January 18, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <div className="space-y-8 text-gray-300 leading-relaxed">

                            {/* Introduction */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                                <p>
                                    At 1n1scalez ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                                </p>
                                <p>
                                    By accessing or using our services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                                </p>
                            </section>

                            {/* Information We Collect */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Personal Information</h3>
                                <p>We may collect the following types of personal information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Contact Information:</strong> Name, email address, phone number, and business details</li>
                                    <li><strong>Business Information:</strong> Company name, industry, revenue range, and current client acquisition challenges</li>
                                    <li><strong>Communications:</strong> Messages, inquiries, and other communications you send to us</li>
                                    <li><strong>Account Information:</strong> If you create an account, we collect login credentials and preferences</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
                                <p>When you visit our website, we automatically collect certain information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and navigation patterns</li>
                                    <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                                    <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                                    <li><strong>Cookies and Tracking:</strong> Data collected through cookies, web beacons, and similar technologies</li>
                                </ul>
                            </section>

                            {/* How We Use Your Information */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                                <p>We use your information for the following purposes:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our client acquisition systems and services</li>
                                    <li><strong>Communication:</strong> To respond to inquiries, send service updates, and provide customer support</li>
                                    <li><strong>Personalization:</strong> To customize your experience and deliver relevant content and recommendations</li>
                                    <li><strong>Marketing:</strong> To send promotional materials, newsletters, and information about our services (with your consent)</li>
                                    <li><strong>Analytics:</strong> To analyze usage patterns, optimize our website, and improve our services</li>
                                    <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights and interests</li>
                                    <li><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
                                </ul>
                            </section>

                            {/* Information Sharing */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">How We Share Your Information</h2>
                                <p>We may share your information in the following circumstances:</p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Service Providers</h3>
                                <p>
                                    We work with third-party service providers who assist us in operating our business, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>CRM and marketing automation platforms</li>
                                    <li>Email service providers</li>
                                    <li>Analytics and data tracking services</li>
                                    <li>Hosting and infrastructure providers</li>
                                    <li>Payment processors (if applicable)</li>
                                </ul>
                                <p className="mt-3">
                                    These providers are contractually obligated to protect your information and use it only for the purposes we specify.
                                </p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Legal Requirements</h3>
                                <p>
                                    We may disclose your information if required by law or in response to valid legal requests, such as court orders, subpoenas, or government investigations.
                                </p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Business Transfers</h3>
                                <p>
                                    If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control.
                                </p>
                            </section>

                            {/* Data Security */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                                <p>
                                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Encryption of data in transit and at rest</li>
                                    <li>Regular security assessments and audits</li>
                                    <li>Access controls and authentication measures</li>
                                    <li>Employee training on data protection practices</li>
                                </ul>
                                <p className="mt-3">
                                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                                </p>
                            </section>

                            {/* Your Rights */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
                                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                                    <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                                    <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                                </ul>
                                <p className="mt-3">
                                    To exercise any of these rights, please contact us at the email address provided below.
                                </p>
                            </section>

                            {/* Cookies */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
                                <p>
                                    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Remember your preferences and settings</li>
                                    <li>Analyze website traffic and user behavior</li>
                                    <li>Deliver targeted advertising and content</li>
                                    <li>Improve website functionality and performance</li>
                                </ul>
                                <p className="mt-3">
                                    You can control cookie preferences through your browser settings. However, disabling cookies may affect the functionality of our website.
                                </p>
                            </section>

                            {/* Third-Party Links */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
                                <p>
                                    Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                                </p>
                            </section>

                            {/* Children's Privacy */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                                <p>
                                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
                                </p>
                            </section>

                            {/* International Data Transfers */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
                                <p>
                                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to these countries.
                                </p>
                            </section>

                            {/* Changes to Privacy Policy */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                                </p>
                                <p className="mt-3">
                                    Your continued use of our services after such changes constitutes your acceptance of the updated Privacy Policy.
                                </p>
                            </section>

                            {/* Contact */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                                <p>
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                                </p>
                                <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-xl">
                                    <p className="font-semibold text-white">1n1scalez</p>
                                    <p className="mt-2">Email: <a href="mailto:privacy@1n1scalez.com" className="text-purple-400 hover:text-purple-300 transition-colors">privacy@1n1scalez.com</a></p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PrivacyPolicy;
