import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePersonalization } from '../context/PersonalizationContext';

const PersonalizerSidebar = () => {
    const { themeData, updateField, isMenuOpen, toggleMenu } = usePersonalization();

    const InputField = ({ label, fieldKey }) => (
        <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', color: '#6b7280', fontWeight: 500 }}>
                {label}
            </label>
            <input 
                type="text"
                value={themeData[fieldKey]}
                onChange={(e) => updateField(fieldKey, e.target.value)}
                style={{
                    width: '100%',
                    padding: '0.8rem',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    color: '#1A2F33',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                }}
            />
        </div>
    );

    return (
        <>
            {/* Floating Action Button always visible if menu is closed */}
            <AnimatePresence>
                {!isMenuOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={toggleMenu}
                        style={{
                            position: 'fixed',
                            bottom: '30px',
                            right: '30px',
                            zIndex: 9999,
                            backgroundColor: '#007A90',
                            color: 'white',
                            border: 'none',
                            borderRadius: '30px',
                            padding: '1rem 2rem',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            cursor: 'pointer',
                            boxShadow: '0 10px 30px rgba(0,122,144,0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontFamily: "'Montserrat', sans-serif"
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>🪄</span> Personalize Design
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Sliding Sidebar Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop Overlay to close on outside click */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 9998, backdropFilter: 'blur(2px)' }}
                        />
                        
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: '400px',
                                maxWidth: '90vw',
                                backgroundColor: 'rgba(250, 250, 250, 0.95)',
                                backdropFilter: 'blur(20px)',
                                borderLeft: '1px solid rgba(255,255,255,0.5)',
                                zIndex: 10000,
                                boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
                                display: 'flex',
                                flexDirection: 'column',
                                fontFamily: "'Montserrat', sans-serif"
                            }}
                        >
                            <div style={{ padding: '2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h2 style={{ fontSize: '1.5rem', fontFamily: "'Playfair Display', serif", color: '#1A2F33', margin: 0, letterSpacing: '-0.5px' }}>Personalization</h2>
                                    <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: '0.2rem 0 0 0' }}>See your changes instantly</p>
                                </div>
                                <button onClick={toggleMenu} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6b7280' }}>×</button>
                            </div>

                            <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
                                <h3 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '2px solid #007A90', paddingBottom: '0.5rem', display: 'inline-block' }}>Names & Dates</h3>
                                <InputField label="Partner 1 Name" fieldKey="partner1" />
                                <InputField label="Partner 2 Name" fieldKey="partner2" />
                                <InputField label="Date (Fancy Format)" fieldKey="dateStr" />
                                <InputField label="Date (Numeric Format)" fieldKey="dateFull" />

                                <h3 style={{ fontSize: '1rem', marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #007A90', paddingBottom: '0.5rem', display: 'inline-block' }}>Location</h3>
                                <InputField label="Venue Name" fieldKey="venueTitle" />
                                <InputField label="Venue Location" fieldKey="venueLocation" />

                                <h3 style={{ fontSize: '1rem', marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #007A90', paddingBottom: '0.5rem', display: 'inline-block' }}>Imagery (Paste URLs)</h3>
                                <InputField label="Main Hero Image URL" fieldKey="imgHero" />
                                <InputField label="Detail Image 1 URL" fieldKey="imgDetail1" />
                                <InputField label="Detail Image 2 URL" fieldKey="imgDetail2" />
                                <InputField label="Detail Image 3 URL" fieldKey="imgDetail3" />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default PersonalizerSidebar;
