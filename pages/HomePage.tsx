import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SocialProofBar } from '../components/SocialProofBar';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { Process } from '../components/Process';
import { Offer } from '../components/Offer';
import { Contact } from '../components/Contact';
import { AuditGratuit } from '../components/AuditGratuit';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
    const { language } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        if ((location.state as { scrollToAudit?: boolean } | null)?.scrollToAudit) {
            // Clear the state so back-navigation doesn't re-trigger
            window.history.replaceState({}, '');
            const tryScroll = () => {
                const target = document.querySelector('#audit');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Element not yet in DOM (lazy-loaded section), retry
                    requestAnimationFrame(tryScroll);
                }
            };
            requestAnimationFrame(tryScroll);
        }
    }, [location.state]);

    return (
        <>
            <SEOHead
                title={language === 'fr'
                    ? 'Osiris - Agence Web Premium | Sites Vitrines Haute Performance'
                    : 'Osiris - Premium Web Agency | High-Performance Showcase Websites'}
                description={language === 'fr'
                    ? 'Osiris, agence web premium spécialisée dans la création de sites vitrines haute performance, landing pages sur-mesure et design UI/UX d\'exception. Dominez votre marché digital.'
                    : 'Osiris, premium web agency specializing in high-performance showcase websites, custom landing pages and exceptional UI/UX design. Dominate your digital market.'}
                canonical="https://osiris-web.com/"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Accueil",
                            "item": "https://osiris-web.com/"
                        }
                    ]
                }}
            />
            <Hero />
            <SocialProofBar />
            <ProcessTimeline />
            <Process />
            <Offer />
            {/* Section Audit Gratuit — juste avant Contact (logique narrative) */}
            <AuditGratuit />
            <Contact />
            <Footer />
        </>
    );
};
