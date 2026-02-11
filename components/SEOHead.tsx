import React, { useEffect } from 'react';

interface SEOHeadProps {
    title: string;
    description: string;
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    jsonLd?: Record<string, unknown>;
    noindex?: boolean;
}

/**
 * SEOHead - Dynamically updates document head meta tags for each page.
 * Works with React SPA by manipulating the DOM directly.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    twitterTitle,
    twitterDescription,
    twitterImage,
    jsonLd,
    noindex = false,
}) => {
    useEffect(() => {
        // Title
        document.title = title;

        // Helper to set/create meta tags
        const setMeta = (attr: string, key: string, content: string) => {
            let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, key);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        // Standard meta
        setMeta('name', 'description', description);
        setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

        // Open Graph
        setMeta('property', 'og:title', ogTitle || title);
        setMeta('property', 'og:description', ogDescription || description);
        setMeta('property', 'og:type', ogType);
        if (ogImage) setMeta('property', 'og:image', ogImage);
        if (canonical) {
            setMeta('property', 'og:url', canonical);

            // Canonical link
            let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', canonical);
        }

        // Twitter Card
        setMeta('name', 'twitter:card', 'summary_large_image');
        setMeta('name', 'twitter:title', twitterTitle || ogTitle || title);
        setMeta('name', 'twitter:description', twitterDescription || ogDescription || description);
        if (twitterImage || ogImage) {
            setMeta('name', 'twitter:image', twitterImage || ogImage || '');
        }

        // JSON-LD Structured Data
        if (jsonLd) {
            // Remove previous JSON-LD injected by this component
            const existing = document.querySelector('script[data-seo-head="true"]');
            if (existing) existing.remove();

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-seo-head', 'true');
            script.textContent = JSON.stringify(jsonLd);
            document.head.appendChild(script);
        }

        // Cleanup on unmount
        return () => {
            const script = document.querySelector('script[data-seo-head="true"]');
            if (script) script.remove();
        };
    }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, twitterTitle, twitterDescription, twitterImage, jsonLd, noindex]);

    return null; // This component renders nothing visible
};
