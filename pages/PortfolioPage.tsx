import React from 'react';
import { Showcase } from '../components/Showcase';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

export const PortfolioPage: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Portfolio - Osiris | Nos Réalisations Web Premium"
                description="Découvrez les sites vitrines et landing pages premium réalisés par Osiris Agency. Design sur-mesure, performance et résultats concrets pour nos clients."
                canonical="https://osiris-web.com/portfolio"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://osiris-web.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://osiris-web.com/portfolio" }
                    ]
                }}
            />
            <div className="pt-24 sm:pt-28">
                <Showcase />
            </div>
            <Footer />
        </>
    );
};
