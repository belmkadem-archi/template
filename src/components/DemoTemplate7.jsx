import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePersonalization } from '../context/PersonalizationContext';

const DemoTemplate7 = () => {
    const { themeData } = usePersonalization();
    const [isSent, setIsSent] = useState(false);
    const { scrollYProgress } = useScroll();
    const leftScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    const theme = {
        serif: "'Playfair Display', serif",
        sans: "'Lato', sans-serif",
        bg: "#FAFAFA",
        text: "#222222",
        accent: "#A0A0A0"
    };

    return (
        <div style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh', overflowX: 'hidden' }}>
            <style>{`
        .split-container { display: flex; min-height: 100vh; }
        .split-left { width: 50vw; height: 100vh; position: fixed; left: 0; top: 0; overflow: hidden; z-index: 1; }
        .split-right { width: 50vw; margin-left: 50vw; position: relative; z-index: 2; scroll-behavior: smooth; background-color: #FAFAFA; }
        .split-section { padding: 10rem 5rem; min-height: 100vh; border-top: 1px solid rgba(160,160,160,0.2); }
        .hero-section { height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 0 5rem; }
        
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(4rem, 8vw, 8rem); line-height: 1; margin-bottom: 2rem; }
        .section-title { font-family: 'Playfair Display', serif; font-size: 3rem; margin-bottom: 3rem; font-style: italic; }
        .rsvp-title { font-family: 'Playfair Display', serif; font-size: 4rem; margin-bottom: 2rem; }

        @media (max-width: 768px) {
          .split-container { flex-direction: column; display: block; }
          .split-left { width: 100vw; height: 60vh; position: relative; } 
          .split-right { width: 100vw; margin-left: 0; }
          .split-section { padding: 5rem 2rem; min-height: auto; }
          .hero-section { height: auto; min-height: 60vh; padding: 4rem 2rem; }
          .hero-title { font-size: clamp(3.5rem, 12vw, 5rem); }
          .section-title { font-size: 2.5rem; }
          .rsvp-title { font-size: 3rem; }
        }
      `}</style>

            <div className="split-container">
                {/* Fixed Left Panel (Becomes scrolling top banner on mobile) */}
                <div className="split-left">
                    <motion.div style={{ width: '100%', height: '100%', scale: leftScale }}>
                        <img src={themeData.imgHero} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Fine Art Romance" />
                    </motion.div>
                    {/* Minimal corner branding */}
                    <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', color: '#fff', fontFamily: theme.sans, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        {themeData.partner1} & {themeData.partner2}
                    </div>
                </div>

                {/* Scrolling Right Panel (Becomes full width body on mobile) */}
                <div className="split-right">

                    <section className="hero-section">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }}>
                            <h1 className="hero-title">{themeData.partner1} <br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: theme.accent }}>&</span> {themeData.partner2}</h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '4rem' }}>
                                <div style={{ width: '50px', height: '1px', backgroundColor: theme.text }}></div>
                                <p style={{ fontFamily: theme.sans, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', fontWeight: 300 }}>{themeData.dateStr} • {themeData.venueLocation}</p>
                            </div>
                        </motion.div>
                    </section>

                    <section className="split-section">
                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className="section-title">Join us in Paris</motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2 }} style={{ fontFamily: theme.sans, fontSize: '1.2rem', lineHeight: 2, fontWeight: 300, color: '#444' }}>
                            We are delighted to invite you to celebrate our union in the city of romance. An afternoon of fine dining, surrounded by historic beauty and the people we cherish the most.
                        </motion.p>

                        <div style={{ marginTop: '5rem', paddingLeft: '2rem', borderLeft: `1px solid ${theme.text}` }}>
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontFamily: theme.sans, fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', color: theme.accent, marginBottom: '0.5rem' }}>L'Événement</h3>
                                <p style={{ fontFamily: theme.serif, fontSize: '1.8rem' }}>15:00 • {themeData.venueTitle}</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                                <h3 style={{ fontFamily: theme.sans, fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', color: theme.accent, marginBottom: '0.5rem' }}>Le Dîner</h3>
                                <p style={{ fontFamily: theme.serif, fontSize: '1.8rem' }}>19:00 • {themeData.venueTitle}</p>
                            </motion.div>
                        </div>
                    </section>

                    <section className="split-section" style={{ position: 'relative' }}>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} style={{ width: '100%', height: '40vh', background: '#ccc', marginBottom: '4rem' }}>
                            <img src={themeData.imgDetail1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Detail view" />
                        </motion.div>

                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="rsvp-title">R.S.V.P</motion.h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '100%' }}>
                            <input type="text" placeholder="Name(s)" style={{ border: 'none', borderBottom: `1px solid ${theme.text}`, background: 'transparent', padding: '1rem 0', fontFamily: theme.sans, fontSize: '1.2rem', outline: 'none', width: '100%' }} />
                            <motion.button 
                                onClick={(e) => { e.preventDefault(); setIsSent(true); }}
                                whileHover={!isSent ? { backgroundColor: theme.accent, color: '#fff' } : {}} 
                                style={{ background: isSent ? theme.accent : theme.text, color: isSent ? '#fff' : theme.bg, border: 'none', padding: '1.5rem', fontFamily: theme.sans, letterSpacing: '4px', textTransform: 'uppercase', cursor: isSent ? 'default' : 'pointer', marginTop: '1rem', transition: 'background 0.3s', width: '100%' }}
                            >
                                {isSent ? 'Sent ✓' : 'Send RSVPs'}
                            </motion.button>
                        </form>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default DemoTemplate7;
