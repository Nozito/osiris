import React from 'react';
import { Showcase } from '../components/Showcase';
import { Footer } from '../components/Footer';

export const PortfolioPage: React.FC = () => {
    return (
        <>
            <div className="pt-24 sm:pt-28">
                <Showcase />
            </div>
            <Footer />
        </>
    );
};
