import React from 'react';
import { Showcase } from '../components/Showcase';
import { Footer } from '../components/Footer';

export const PortfolioPage: React.FC = () => {
    return (
        <>
            <div className="pt-32">
                <Showcase />
            </div>
            <Footer />
        </>
    );
};
