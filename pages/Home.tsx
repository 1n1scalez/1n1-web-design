
import React, { Suspense } from 'react';
import { AlcoveSection } from '../components/AlcoveSection';
import { SEO } from '../components/SEO';

// Lazy Load components below the fold for performance
const ValueProps = React.lazy(() => import('../components/ValueProps').then(module => ({ default: module.ValueProps })));
const ArchitectSection = React.lazy(() => import('../components/ArchitectSection').then(module => ({ default: module.ArchitectSection })));
const Testimonials = React.lazy(() => import('../components/Testimonials').then(module => ({ default: module.Testimonials })));
const ContactForm = React.lazy(() => import('../components/ContactForm').then(module => ({ default: module.ContactForm })));
const FAQ = React.lazy(() => import('../components/FAQ').then(module => ({ default: module.FAQ })));

export const Home: React.FC = () => {
    return (
        <>
            <SEO
                title="1n1scalez | Automated Client Acquisition Systems"
                description="We build automated acquisition systems & CRM infrastructure for service businesses. Get 5 new clients in 30 days."
            />
            <main className="relative z-10">
                {/* Hero Section - Loaded Immediately */}
                <AlcoveSection />

                {/* Suspense Wrapper for Lazy Loaded Components */}
                <Suspense fallback={<div className="h-40 w-full flex items-center justify-center text-white/20">Loading...</div>}>

                    {/* Value Propositions */}
                    <ValueProps />

                    {/* Architect Section */}
                    <ArchitectSection />

                    {/* Social Proof & Testimonials */}
                    <Testimonials />

                    {/* Conversion Section with Form */}
                    <ContactForm />

                    {/* FAQ Section */}
                    <FAQ />

                </Suspense>
            </main>
        </>
    );
};
