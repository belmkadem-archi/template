import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Clock, ChevronDown } from 'lucide-react';

const PremiumTemplate = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
    const opacity1 = useTransform(scrollY, [0, 400], [1, 0]);

    // Dynamically load premium fonts
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Pinyon+Script&family=Outfit:wght@300;400;500&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    const theme = {
        fontScript: "'Pinyon Script', cursive",
        fontSerif: "'Cormorant Garamond', serif",
        fontSans: "'Outfit', sans-serif",
        accent: "#b59870",
        bg: "#FAFAF9",
        surface: "#ffffff",
        text: "#1c1917"
    };

    return (
        <div style={{ backgroundColor: theme.bg, color: theme.text, fontFamily: theme.fontSerif, overflowX: 'hidden' }}>

            {/* 1. Cinematic Hero Section */}
            <section style={{ height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, y: y1 }}>
                    <div style={{ width: '100%', height: '120%', background: 'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 100%)' }} />
                    {/* Subtle animated light orb */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%)', filter: 'blur(30px)' }}
                    />
                </motion.div>

                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                        <span style={{ fontFamily: theme.fontSans, letterSpacing: '6px', fontSize: '0.8rem', textTransform: 'uppercase', color: theme.accent, fontWeight: 500 }}>We are tying the knot</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                        style={{ fontFamily: theme.fontScript, fontSize: 'clamp(5rem, 15vw, 12rem)', lineHeight: 1, margin: '1rem 0', color: theme.text, textShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
                    >
                        Maria <span style={{ fontSize: '0.6em', color: theme.accent }}>&</span> Adrien
                    </motion.h1>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
                        <div style={{ fontSize: '1.6rem', letterSpacing: '3px' }}>May 24, 2026</div>
                        <div style={{ fontFamily: theme.fontSans, fontSize: '0.9rem', marginTop: '1rem', letterSpacing: '2px', opacity: 0.6, textTransform: 'uppercase' }}>Prague, Czech Republic</div>
                    </motion.div>
                </div>

                <motion.div
                    style={{ position: 'absolute', bottom: '3rem', opacity: opacity1 }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ChevronDown size={32} color={theme.accent} strokeWidth={1} />
                </motion.div>
            </section>

            {/* 2. Elegant Invitation Text */}
            <section style={{ padding: '10rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    style={{ fontFamily: theme.fontScript, fontSize: '4.5rem', color: theme.accent, marginBottom: '2rem' }}
                >
                    Dear family & friends
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ fontSize: '1.6rem', lineHeight: 1.8, color: theme.text, fontWeight: 300 }}
                >
                    It is impossible to imagine this day without our closest people. Thus, we are incredibly happy to invite you to join and share this wonderful occasion with us.
                </motion.p>
            </section>

            {/* 3. Glassmorphic Itinerary timeline */}
            <section style={{ padding: '6rem 1rem', background: '#e7e5e4' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            borderRadius: '40px',
                            border: '1px solid rgba(255,255,255,0.8)',
                            padding: '5rem 3rem',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.06)'
                        }}
                    >
                        <h3 style={{ textAlign: 'center', fontFamily: theme.fontScript, fontSize: '5rem', marginBottom: '5rem', color: theme.text }}>The Details</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '4rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ width: '70px', height: '70px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'rgba(181, 152, 112, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.accent }}>
                                    <Calendar size={28} strokeWidth={1.2} />
                                </div>
                                <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 400 }}>Ceremony</h4>
                                <div style={{ fontFamily: theme.fontSans, fontSize: '0.85rem', color: theme.accent, letterSpacing: '2px', marginBottom: '1rem', fontWeight: 500 }}>SATURDAY, 2:00 PM</div>
                                <p style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>Vrtba Garden</p>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <div style={{ width: '70px', height: '70px', margin: '0 auto 1.5rem', borderRadius: '50%', background: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 15px 30px rgba(181,152,112,0.4)' }}>
                                    <MapPin size={28} strokeWidth={1.2} />
                                </div>
                                <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 400 }}>Cocktail & Dinner</h4>
                                <div style={{ fontFamily: theme.fontSans, fontSize: '0.85rem', color: theme.accent, letterSpacing: '2px', marginBottom: '1rem', fontWeight: 500 }}>SATURDAY, 5:00 PM</div>
                                <p style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>Prague Castle Estate</p>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <div style={{ width: '70px', height: '70px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'rgba(181, 152, 112, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.accent }}>
                                    <Clock size={28} strokeWidth={1.2} />
                                </div>
                                <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 400 }}>The Party</h4>
                                <div style={{ fontFamily: theme.fontSans, fontSize: '0.85rem', color: theme.accent, letterSpacing: '2px', marginBottom: '1rem', fontWeight: 500 }}>SATURDAY, 8:30 PM</div>
                                <p style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>Dancing until late</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Minimalist Dress Code */}
            <section style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                <h2 style={{ fontFamily: theme.fontScript, fontSize: '4.5rem', marginBottom: '2rem' }}>Dress Code</h2>
                <p style={{ fontSize: '1.4rem', color: theme.text, opacity: 0.8, marginBottom: '3rem' }}>Black Tie Optional. We ask our guests to wear neutral tones.</p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {['#EAE6E1', '#D4CCC3', '#9D958B', '#5A5652', '#2A2826'].map((color, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: color, boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '2px solid #fff' }}
                        />
                    ))}
                </div>
            </section>

            {/* 5. Minimalist RSVP Form */}
            <section style={{ padding: '6rem 2rem 10rem', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '600px', margin: '0 auto', background: '#1c1917', color: '#fff', padding: '5rem 3rem', borderRadius: '30px' }}
                >
                    <h2 style={{ fontFamily: theme.fontScript, fontSize: '4.5rem', marginBottom: '1rem', color: theme.accent }}>Confirm presence</h2>
                    <p style={{ fontFamily: theme.fontSans, fontWeight: 300, opacity: 0.8, marginBottom: '4rem', letterSpacing: '2px', fontSize: '0.8rem' }}>KINDLY REPLY BY MARCH 1ST</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <input type="text" placeholder="Your Name" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '1rem 0', fontFamily: theme.fontSans, fontSize: '1.1rem', outline: 'none' }} />

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexDirection: 'column', marginTop: '1rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', fontFamily: theme.fontSans, fontWeight: 300 }}>
                                <input type="radio" name="rsvp" style={{ accentColor: theme.accent, transform: 'scale(1.2)' }} />
                                Yes, I will celebrate with you
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', fontFamily: theme.fontSans, fontWeight: 300 }}>
                                <input type="radio" name="rsvp" style={{ accentColor: theme.accent, transform: 'scale(1.2)' }} />
                                Unfortunately, I cannot
                            </label>
                        </div>

                        <button style={{ background: theme.accent, color: '#fff', fontFamily: theme.fontSans, letterSpacing: '3px', textTransform: 'uppercase', padding: '1.2rem', borderRadius: '4px', marginTop: '3rem', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }}>
                            Send Reply
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default PremiumTemplate;
