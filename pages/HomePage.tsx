import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AboutReveal } from '../components/AboutReveal';
import { Works } from '../components/Works';
import { DeliveryTimeline } from '../components/DeliveryTimeline';
import { Testimonials } from '../components/Testimonials';
import { Offer } from '../components/Offer';
import { FAQ } from '../components/FAQ';
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
                    ? 'Osiris Agency | Création Site Web Manosque – Devis Gratuit'
                    : 'Osiris Agency | Custom Website Design Manosque – Free Quote'}
                description={language === 'fr'
                    ? 'Osiris Agency, agence web à Manosque (04100). Création de sites vitrines sur-mesure, landing pages et design UI/UX premium. Devis gratuit sous 24h.'
                    : 'Osiris Agency, premium web agency based in Manosque, France. High-performance showcase websites, custom landing pages and UI/UX design. Free quote within 24h.'}
                canonical="https://osiris-agency.fr/"
                ogImage="https://osiris-agency.fr/og-image.png"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://osiris-agency.fr/" }
                            ]
                        },
                        {
                            "@type": "Service",
                            "name": "Création de sites web sur-mesure – Manosque",
                            "provider": { "@type": "LocalBusiness", "name": "Osiris Agency", "url": "https://osiris-agency.fr" },
                            "areaServed": [
                                { "@type": "City", "name": "Manosque" },
                                { "@type": "AdministrativeArea", "name": "Alpes-de-Haute-Provence" }
                            ],
                            "serviceType": ["Création de sites web", "Web Design", "Landing Page", "UI/UX Design", "SEO"]
                        }
                    ]
                }}
            />
            <Hero />
            <AboutReveal />
            <Works />
            <DeliveryTimeline />
            <Testimonials />
            <Offer />
            <FAQ />
            <AuditGratuit />
            <Footer />
        </>
    );
};
