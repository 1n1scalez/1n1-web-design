
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    type?: string;
    url?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image = '/1n1scalez.png',
    type = 'website',
    url = typeof window !== 'undefined' ? window.location.href : ''
}) => {
    const siteName = '1n1scalez';

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data (Organization) */}
            <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "${siteName}",
            "url": "https://1n1scalez.com",
            "logo": "https://1n1scalez.com/1n1scalez.png",
            "sameAs": [
              "https://www.instagram.com/1n1scalez",
              "https://www.facebook.com/share/1BS5V9ujY1/"
            ]
          }
        `}
            </script>
        </Helmet>
    );
};
