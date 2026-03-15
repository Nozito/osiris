import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, Translations } from '../translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'lang';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Check localStorage for saved preference
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEY);
            const legacy = localStorage.getItem('osiris-language');
            if (saved === 'en' || saved === 'fr') {
                return saved;
            }
            if (legacy === 'en' || legacy === 'fr') {
                return legacy;
            }
        }
        return 'fr';
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
