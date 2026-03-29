import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Real photo URLs (verified Unsplash wedding images)
const PHOTO_DELIVERY = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=600&h=1100';
const PHOTO_INTERACTIVE = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=1100';

// Animation 1: Instant Delivery — real photo with notification overlay
const InstantDeliveryAnimation = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            {/* Full-bleed hero photo */}
            <motion.img
                src={PHOTO_DELIVERY}
                alt="Wedding"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: 'easeOut' }}
            />

            {/* Dark gradient overlay for readability */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%)'
            }} />

            {/* Animated notification drop-in */}
            <motion.div
                animate={{ y: [-120, 20, 20, 20, -120], opacity: [0, 1, 1, 1, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
                style={{
                    position: 'absolute', top: '8%', left: '8%', right: '8%',
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '18px',
                    padding: '14px 16px',
                    display: 'flex', gap: '12px', alignItems: 'center',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
                    zIndex: 10
                }}
            >
                <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #166E87, #0B3A48)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0
                }}>
                    💍
                </div>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.8rem', color: '#111', whiteSpace: 'nowrap' }}>Wedding Invitation</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', color: '#555', marginTop: '2px', whiteSpace: 'nowrap' }}>Sarah & James — Delivered ✨</div>
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', color: '#999', flexShrink: 0 }}>now</div>
            </motion.div>

            {/* Bottom card — elegant glass card */}
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: [80, 0, 0, 80], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{
                    position: 'absolute', bottom: '6%', left: '8%', right: '8%',
                    background: 'rgba(255,255,255,0.90)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    padding: '18px',
                    boxShadow: '0 -10px 40px rgba(0,0,0,0.2)',
                    zIndex: 10
                }}
            >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#1A2F33', fontWeight: 600, marginBottom: '4px' }}>You're Invited 🌸</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', color: '#6b7280', lineHeight: 1.5 }}>
                    Sarah & James · June 14, 2025<br />The Grand Château, Paris
                </div>
                <div style={{
                    marginTop: '12px',
                    padding: '8px 16px',
                    background: 'linear-gradient(135deg, #166E87, #0B3A48)',
                    borderRadius: '100px', display: 'inline-block',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.7rem', fontWeight: 700,
                    color: '#fff', letterSpacing: '1px'
                }}>
                    RSVP NOW
                </div>
            </motion.div>
        </div>
    );
};

// Animation 2: Interactive Experience — real photo with UI overlay
const InteractiveAnimation = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            {/* Full-bleed photo */}
            <motion.img
                src={PHOTO_INTERACTIVE}
                alt="Wedding venue"
                style={{ width: '100%', height: '50%', objectFit: 'cover', objectPosition: 'center top' }}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: 'easeOut' }}
            />

            {/* Lower half: clean white UI */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '58%', background: '#fff', borderTopLeftRadius: '0', zIndex: 2 }} />

            {/* Sliding bottom sheet with map + details */}
            <motion.div
                animate={{ y: ['60%', '0%', '0%', '60%'] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '62%',
                    background: '#fff',
                    borderTopLeftRadius: '28px', borderTopRightRadius: '28px',
                    boxShadow: '0 -20px 50px rgba(0,0,0,0.15)',
                    zIndex: 5, padding: '18px 20px',
                    display: 'flex', flexDirection: 'column', gap: '14px'
                }}
            >
                {/* Pill handle */}
                <div style={{ width: '36px', height: '4px', background: '#E2E8F0', borderRadius: '2px', margin: '0 auto 4px' }} />

                {/* Mini map strip */}
                <div style={{
                    height: '80px', borderRadius: '14px', overflow: 'hidden',
                    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)',
                    position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {/* Grid lines suggesting a map */}
                    <div style={{ position: 'absolute', inset: 0, backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)' }} />
                    <motion.div
                        animate={{ y: [0, -6, 0], scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ zIndex: 2, fontSize: '22px' }}
                    >📍</motion.div>
                </div>

                {/* Details rows */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{
                        width: '36px', height: '36px', borderRadius: '10px',
                        background: 'linear-gradient(135deg, #fdf4ff, #f3e8ff)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0
                    }}>🏰</div>
                    <div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.78rem', color: '#111' }}>The Grand Château</div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', color: '#9ca3af' }}>Paris, France · 3.2 km away</div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{
                        width: '36px', height: '36px', borderRadius: '10px',
                        background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0
                    }}>📅</div>
                    <div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.78rem', color: '#111' }}>June 14, 2025 · 6:00 PM</div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', color: '#9ca3af' }}>Add to Calendar</div>
                    </div>
                </div>
            </motion.div>

            {/* Pulsing map pin on photo area */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
                    fontSize: '28px', zIndex: 4
                }}
            >
                📍
            </motion.div>
        </div>
    );
};

// Reusable Mockup Container
const DeviceMockupContainer = ({ children }) => {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            borderRadius: '32px',
            padding: '2.5rem 2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            minHeight: '520px',
            boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.04)'
        }}>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                style={{
                    width: '240px',
                    height: '490px',
                    backgroundColor: '#111',
                    borderRadius: '40px',
                    padding: '10px',
                    position: 'relative',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1) inset',
                    border: '1px solid #333'
                }}
            >
                {/* Dynamic island */}
                <div style={{
                    position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
                    width: '80px', height: '22px', backgroundColor: '#000',
                    borderBottomLeftRadius: '14px', borderBottomRightRadius: '14px',
                    zIndex: 20
                }} />
                {/* Buttons */}
                <div style={{ position: 'absolute', right: '-3px', top: '100px', width: '3px', height: '45px', background: '#333', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '80px', width: '3px', height: '35px', background: '#333', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '125px', width: '3px', height: '55px', background: '#333', borderRadius: '2px' }} />
                {/* Screen */}
                <div style={{
                    width: '100%', height: '100%',
                    borderRadius: '32px', overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#000'
                }}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

const FeaturesSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const CheckMark = () => (
        <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #166E87, #0B3A48)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 'bold', flexShrink: 0 }}>✓</div>
    );

    return (
        <section className="section" id="features" style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', letterSpacing: '-0.02em', fontFamily: "'Playfair Display', serif", color: '#1A2F33', marginBottom: '1rem' }}>Why Digital?</h2>
                    <p style={{ color: '#6B7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', fontWeight: 300 }}>
                        Sustainable, Instant, and Unforgettably elegant.
                    </p>
                </div>

                {/* Feature 1 */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '6rem', alignItems: 'center', marginBottom: '8rem' }}>
                    <div style={{ order: isMobile ? 2 : 1 }}>
                        <DeviceMockupContainer>
                            <InstantDeliveryAnimation />
                        </DeviceMockupContainer>
                    </div>

                    <div style={{ order: isMobile ? 1 : 2 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div style={{ display: 'inline-block', background: 'rgba(22,110,135,0.08)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
                                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#166E87', letterSpacing: '1px', textTransform: 'uppercase' }}>⚡ Instant</span>
                            </div>
                            <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', letterSpacing: '-0.02em', fontFamily: "'Playfair Display', serif", color: '#1A2F33' }}>Instant Delivery</h3>
                            <p style={{ color: '#6B7280', fontSize: '1rem', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.8 }}>
                                No postage delays, no lost mail. Your elegant digital invitations arrive instantly to your guests' smartphones, no matter where they are in the world.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#374151', fontSize: '0.95rem' }}>
                                    <CheckMark /> Save on postage and printing costs
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#374151', fontSize: '0.95rem' }}>
                                    <CheckMark /> Instant RSVP tracking
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '6rem', alignItems: 'center' }}>
                    <div style={{ order: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div style={{ display: 'inline-block', background: 'rgba(22,110,135,0.08)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
                                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#166E87', letterSpacing: '1px', textTransform: 'uppercase' }}>🗺 Interactive</span>
                            </div>
                            <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', letterSpacing: '-0.02em', fontFamily: "'Playfair Display', serif", color: '#1A2F33' }}>Interactive Experience</h3>
                            <p style={{ color: '#6B7280', fontSize: '1rem', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.8 }}>
                                Give your guests an experience they won't forget. Features include interactive maps, one-click calendar additions, and integrated gift registries.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#374151', fontSize: '0.95rem' }}>
                                    <CheckMark /> Google Maps & Itinerary
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#374151', fontSize: '0.95rem' }}>
                                    <CheckMark /> Integrated Gift Registry
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    <div style={{ order: 2 }}>
                        <DeviceMockupContainer>
                            <InteractiveAnimation />
                        </DeviceMockupContainer>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;
