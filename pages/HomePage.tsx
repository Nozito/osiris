import React from 'react';
import { Hero } from '../components/Hero';
import { ValueTrifecta } from '../components/ValueTrifecta';
import { Showcase } from '../components/Showcase';
import { Process } from '../components/Process';
import { Offer } from '../components/Offer';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <ValueTrifecta />
            <Showcase />
            <Process />
            <Offer />
            <Contact />
            <Footer />
        </>
    );
};
