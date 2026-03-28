import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2000&auto=format&fit=crop", // dark moody sparklers/lights
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2000&auto=format&fit=crop", // dark concert/event lights
];

const DemoTemplate4 = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Space+Grotesk:wght@300;400;500&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <div ref={container} style={{ backgroundColor: '#030303', color: '#ffffff', overflowX: 'hidden' }}>

            {/* Dynamic Glowing Hero */}
            <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <motion.div style={{ position: 'absolute', inset: 0, opacity: 0.4, scale }}>
                    <img src={images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Background" />
                </motion.div>
                {/* Glowing Orbs */}
                <div style={{ position: 'absolute', top: '10%', left: '15%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(255, 60, 0, 0.25) 0%, transparent 70%)', filter: 'blur(80px)', mixBlendMode: 'screen', animation: 'pulse 5s infinite alternate' }} />
                <div style={{ position: 'absolute', bottom: '0%', right: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(60, 0, 255, 0.2) 0%, transparent 70%)', filter: 'blur(100px)', mixBlendMode: 'screen', animation: 'pulse 8s infinite alternate-reverse' }} />

                <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%', padding: '0 2rem' }}>
                    <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 'clamp(3.5rem, 10vw, 8rem)', lineHeight: 1.1, textShadow: '0 0 50px rgba(255,255,255,0.3)', margin: 0 }}>
                        SOPHIA <span style={{ color: '#ff4000', fontSize: '0.8em', margin: '0 1rem' }}>&</span> ALEX
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.5em', textTransform: 'uppercase', fontSize: '0.9rem', marginTop: '2rem', color: 'rgba(255,255,255,0.6)' }}>
                        OCTOBER 24, 2026 • NEW YORK CITY
                    </motion.p>
                </div>

                {/* Minimal scroll line */}
                <motion.div initial={{ height: 0 }} animate={{ height: '100px' }} transition={{ duration: 1.5, delay: 1.5 }} style={{ position: 'absolute', bottom: 0, width: '1px', backgroundColor: 'rgba(255,255,255,0.3)', left: '50%' }} />
            </section>

            {/* Intro Text */}
            <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem', position: 'relative' }}>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', color: '#fff' }}>A NEW ERA BEGINS</h2>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', lineHeight: 2, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
                        Join us under the cover of darkness as we illuminate the night with our vows, followed by an unforgettable afterparty featuring exclusive performances and boundless electric energy.
                    </p>
                </motion.div>
            </section>

            {/* Cyber-Punk / Neon Itinerary & Address */}
            <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', color: '#fff' }}>THE DETAILS</h2>
                    {[
                        { time: "18:00", title: "THE CEREMONY", desc: "Arrive promptly for dusk. Black tie strictly required.", address: "The Grand Reserve, 123 Midnight Avenue, NY 10001" },
                        { time: "20:00", title: "THE RECEPTION", desc: "Open bar, experimental gastronomy, and darkness.", address: "The Underground Vault, 124 Midnight Avenue, NY 10001" },
                        { time: "00:00", title: "THE AFTERPARTY", desc: "Neon dancefloor. Invite-only access.", address: "Secret Location (Coordinates provided upon RSVP)" }
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.15, duration: 0.8 }} style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '3rem 0', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', color: '#ff4000', width: '120px', flexShrink: 0, paddingTop: '0.4rem', fontWeight: 500, letterSpacing: '2px' }}>{item.time}</div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '2.2rem', marginBottom: '1rem', textShadow: '0 0 20px rgba(255,64,0,0.1)' }}>{item.title}</h3>
                                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'rgba(255,255,255,0.8)', fontWeight: 300, fontSize: '1.1rem', marginBottom: '1rem' }}>{item.address}</p>
                                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'rgba(255,255,255,0.4)', fontWeight: 300, fontSize: '0.9rem', fontStyle: 'italic' }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Brutalist RSVP */}
            <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem', position: 'relative', backgroundColor: '#000' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ position: 'absolute', inset: 0 }}>
                    <img src={images[1]} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2, filter: 'grayscale(100%)' }} alt="Crowd" />
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: 'relative', zIndex: 1, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.8)', padding: '5rem 3rem', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem' }}>ENTER THE GUESTLIST</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px', margin: '0 auto' }}>
                        <input type="text" placeholder="GUEST NAME" style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '1rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '2px', outline: 'none' }} />
                        <motion.button whileHover={{ backgroundColor: '#fff', color: '#000' }} style={{ backgroundColor: '#ff4000', color: '#fff', border: 'none', padding: '1.2rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: '4px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                            CONFIRM IDENTITY
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            <style>{`
        @keyframes pulse {
          0% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
        </div>
    );
};

export default DemoTemplate4;
