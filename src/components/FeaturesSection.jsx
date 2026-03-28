import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animation 1: Instant Delivery (Envelope / Notification)
const InstantDeliveryAnimation = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#F8FAFC', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/* Notification drop down */}
            <motion.div
                animate={{ y: [-100, 20, 20, 20, -100], opacity: [0, 1, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '15%', width: '80%', padding: '12px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', gap: '12px', alignItems: 'center', zIndex: 10 }}
            >
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #166E87, #0B3A48)' }} />
                <div style={{ flex: 1 }}>
                    <div style={{ height: '8px', width: '60%', background: '#E2E8F0', borderRadius: '4px', marginBottom: '6px' }} />
                    <div style={{ height: '6px', width: '40%', background: '#F1F5F9', borderRadius: '4px' }} />
                </div>
            </motion.div>

            {/* Envelope & Card */}
            <div style={{ position: 'relative', width: '150px', height: '110px', marginTop: '40px' }}>
                {/* Back flap */}
                <div style={{ position: 'absolute', inset: 0, backgroundColor: '#E2E8F0', borderRadius: '8px' }} />
                {/* Sliding Card */}
                <motion.div
                    animate={{ y: [0, -70, -70, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', height: '130px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 -5px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}
                >
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #166E87', marginBottom: '10px' }} />
                    <div style={{ height: '4px', width: '60%', background: '#166E87', borderRadius: '2px', opacity: 0.5, marginBottom: '6px' }} />
                    <div style={{ height: '4px', width: '40%', background: '#E2E8F0', borderRadius: '2px' }} />
                </motion.div>
                {/* Front flap overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px', backgroundColor: '#F1F5F9', borderRadius: '8px', clipPath: 'polygon(0 0, 50% 40%, 100% 0, 100% 100%, 0 100%)' }} />
            </div>
        </div>
    );
};

// Animation 2: Interactive Experience (Map & Itinerary)
const InteractiveAnimation = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#E2E8F0', position: 'relative', overflow: 'hidden' }}>
            {/* Map Grid / Lines */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: -50, backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)', opacity: 0.8 }}
            />

            {/* Map Pin */}
            <motion.div
                animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', width: '24px', height: '36px', background: '#166E87', borderRadius: '12px 12px 0 0', clipPath: 'polygon(50% 100%, 0 40%, 0 0, 100% 0, 100% 40%)', zIndex: 2 }}
            >
                <div style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', position: 'absolute', top: '8px', left: '8px' }} />
            </motion.div>

            {/* Ripple under pin */}
            <motion.div
                animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                style={{ position: 'absolute', top: '35%', left: '50%', width: '20px', height: '20px', marginLeft: '-10px', marginTop: '-10px', backgroundColor: '#166E87', borderRadius: '50%', zIndex: 1 }}
            />

            {/* Bottom Sheet Itinerary sliding up */}
            <motion.div
                animate={{ y: ['100%', '0%', '0%', '100%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', backgroundColor: '#fff', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', boxShadow: '0 -10px 30px rgba(0,0,0,0.1)', padding: '20px', zIndex: 5, display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
                <div style={{ width: '40px', height: '4px', backgroundColor: '#E2E8F0', borderRadius: '2px', margin: '0 auto' }} />
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '10px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#F1F5F9' }} />
                    <div style={{ flex: 1 }}>
                        <div style={{ height: '6px', width: '70%', background: '#166E87', borderRadius: '3px', marginBottom: '8px' }} />
                        <div style={{ height: '4px', width: '40%', background: '#CBD5E1', borderRadius: '2px' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#F1F5F9' }} />
                    <div style={{ flex: 1 }}>
                        <div style={{ height: '6px', width: '50%', background: '#166E87', borderRadius: '3px', marginBottom: '8px' }} />
                        <div style={{ height: '4px', width: '30%', background: '#CBD5E1', borderRadius: '2px' }} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// Reusable Mockup Container matching the user's reference exactly
const DeviceMockupContainer = ({ children }) => {
    return (
        <div style={{
            backgroundColor: '#F3F4F6', // The soft grey box from the screenshot
            borderRadius: '32px',
            padding: '3rem 2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            minHeight: '500px'
        }}>
            {/* The Mobile Phone boundary inside the grey box */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                style={{
                    width: '260px',
                    height: '520px',
                    backgroundColor: '#fff',
                    borderRadius: '36px',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    border: '8px solid #E5E7EB', // Subtle bezel
                    position: 'relative'
                }}
            >
                {/* Dynamic animated content inside the phone */}
                {children}
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
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(22, 110, 135, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166E87', fontSize: '10px', fontWeight: 'bold' }}>✓</div>
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

                {/* Feature 1: Grey Box Mockup (Left) | Text (Right) */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '6rem', alignItems: 'center', marginBottom: '8rem' }}>
                    <div style={{ order: isMobile ? 2 : 1 }}>
                        <DeviceMockupContainer>
                            <InstantDeliveryAnimation />
                        </DeviceMockupContainer>
                    </div>

                    <div style={{ order: isMobile ? 1 : 2 }}>
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
                    </div>
                </div>

                {/* Feature 2: Text (Left) | Grey Box Mockup (Right) */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '6rem', alignItems: 'center' }}>
                    <div style={{ order: 1 }}>
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
