import React from 'react';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-transparent font-sans">
            <SEOHead
                title={language === 'fr'
                    ? 'Contact – Osiris Agency Manosque | Devis Gratuit 24h'
                    : 'Contact – Osiris Agency Manosque | Free Quote 24h'}
                description={language === 'fr'
                    ? 'Contactez Osiris Agency à Manosque (04100) pour votre projet web. Devis gratuit sous 24h. Agence web Alpes-de-Haute-Provence spécialisée en sites vitrines premium.'
                    : 'Contact Osiris Agency in Manosque for your web project. Free quote within 24h. Premium web agency specialising in high-performance showcase websites.'}
                canonical="https://osiris-agency.fr/contact"
                ogImage="https://osiris-agency.fr/og-image.png"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://osiris-agency.fr/" },
                                { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://osiris-agency.fr/contact" }
                            ]
                        },
                        {
                            "@type": "ContactPage",
                            "name": "Contact – Osiris Agency Manosque",
                            "url": "https://osiris-agency.fr/contact",
                            "description": "Contactez Osiris Agency à Manosque (04100) pour votre projet web. Devis gratuit sous 24h.",
                            "mainEntity": {
                                "@type": "LocalBusiness",
                                "name": "Osiris Agency",
                                "email": "contact@osiris-agency.fr",
                                "url": "https://osiris-agency.fr",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Manosque",
                                    "postalCode": "04100",
                                    "addressCountry": "FR"
                                }
                            }
                        }
                    ]
                }}
            />

            <div className="pt-16 sm:pt-20 pb-16 sm:pb-24">
                {/* Same contact block as the homepage, with the map under the subtitle */}
                <Contact showMap />
            </div>

            <Footer />
        </div>
    );
};
