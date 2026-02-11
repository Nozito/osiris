import React from 'react';
import { Hero } from '../components/Hero';
import { ValueTrifecta } from '../components/ValueTrifecta';
import { Process } from '../components/Process';
import { Offer } from '../components/Offer';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
    const { language } = useLanguage();

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
            <ValueTrifecta />
            <Process />
            <Offer />
            <Contact />
            <Footer />
        </>
    );
};
