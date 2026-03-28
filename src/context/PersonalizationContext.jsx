import React, { createContext, useContext, useState } from 'react';

const PersonalizationContext = createContext();

export const usePersonalization = () => {
    return useContext(PersonalizationContext);
};

export const PersonalizationProvider = ({ children }) => {
    // Default initial states that currently look great across the 9 templates
    const [themeData, setThemeData] = useState({
        partner1: 'Sophia',
        partner2: 'Alexander',
        dateStr: 'AUGUST 15TH',
        dateFull: '15.08.2025',
        venueTitle: 'Villa Balbiano',
        venueLocation: 'Lake Como, Italy',
        imgHero: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop',
        imgDetail1: 'https://images.unsplash.com/photo-1544078755-9a849f50e82c?q=80&w=1000&auto=format&fit=crop',
        imgDetail2: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
        imgDetail3: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop',
    });

    const [isMenuOpen, setIsMenuOpen] = useState(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            return params.get('personalize') === 'true';
        }
        return false;
    });

    const updateField = (field, value) => {
        setThemeData(prev => ({ ...prev, [field]: value }));
    };

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <PersonalizationContext.Provider value={{ themeData, updateField, isMenuOpen, toggleMenu }}>
            {children}
        </PersonalizationContext.Provider>
    );
};
