import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePersonalization } from '../context/PersonalizationContext';

const KineticTextRow = ({ text, direction = 1, speed = 1 }) => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"]);

    return (
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', width: '100vw' }}>
            <motion.div style={{ x, display: 'inline-block', fontFamily: "'Anton', sans-serif", fontSize: 'clamp(8rem, 20vw, 20rem)', lineHeight: 0.8, textTransform: 'uppercase', color: '#111', whiteSpace: 'nowrap' }}>
                {text} &nbsp; {text} &nbsp; {text} &nbsp; {text}
            </motion.div>
        </div>
    );
};

const DemoTemplate8 = () => {
    const { themeData } = usePersonalization();
    const [isRsvped, setIsRsvped] = useState(false);
    const { scrollYProgress } = useScroll();
    const circleSize = useTransform(scrollYProgress, [0, 0.5], ["0vw", "40vw"]);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Outfit:wght@300;600&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <div style={{ backgroundColor: '#fff', color: '#111', minHeight: '300vh', position: 'relative', overflowX: 'hidden' }}>

            {/* Sticky Background - The kinetic text */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', pointerEvents: 'none', opacity: 0.1 }}>
                <KineticTextRow text={`${themeData.partner1} + ${themeData.partner2}`} direction={1} />
                <KineticTextRow text={`${themeData.partner1} + ${themeData.partner2}`} direction={-1} />
                <KineticTextRow text={`${themeData.partner1} + ${themeData.partner2}`} direction={1} />
            </div>

            {/* Extreme Massive Title */}
            <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', position: 'relative', zIndex: 2 }}>
                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, letterSpacing: '10px', fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '2rem' }}>We Are Doing It</div>
                    <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(6rem, 25vw, 25rem)', lineHeight: 0.8, margin: 0, textTransform: 'uppercase' }}>{themeData.partner1}</h1>
                    <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(6rem, 25vw, 25rem)', lineHeight: 0.8, margin: 0, color: '#fff', WebkitTextStroke: '3px #111', textTransform: 'uppercase' }}>{themeData.partner2}</h1>
                </motion.div>
            </section>

            {/* Expanding Circular Image Reveal */}
            <section style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 3 }}>
                <motion.div style={{ width: circleSize, height: circleSize, borderRadius: '50%', overflow: 'hidden', backgroundColor: '#111', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={themeData.imgHero} style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} alt="Couple" />
                </motion.div>
            </section>

            {/* Brutalist RSVP */}
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2rem', position: 'relative', zIndex: 4, backgroundColor: '#111', color: '#fff' }}>
                <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(5rem, 15vw, 15rem)', textTransform: 'uppercase', marginBottom: '4rem', textAlign: 'center' }}>JOIN US.</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', width: '100%', maxWidth: '800px' }}>
                    <div>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase', color: '#888' }}>WHERE</h3>
                        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', lineHeight: 1.2 }}>{themeData.venueTitle}<br />{themeData.venueLocation}</p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase', color: '#888' }}>WHEN</h3>
                        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', lineHeight: 1.2 }}>Midnight<br />{themeData.dateStr}.</p>
                    </div>
                </div>

                <button 
                    onClick={() => setIsRsvped(true)}
                    style={{ marginTop: '6rem', width: '100%', maxWidth: '800px', padding: '2rem', backgroundColor: isRsvped ? '#4CAF50' : '#fff', color: isRsvped ? '#fff' : '#111', border: 'none', fontFamily: "'Anton', sans-serif", fontSize: '4rem', textTransform: 'uppercase', cursor: isRsvped ? 'default' : 'pointer', transition: 'background-color 0.3s, color 0.3s' }}
                >
                    {isRsvped ? "CONFIRMED ✓" : "I WILL BE THERE"}
                </button>
            </section>

        </div>
    );
};

export default DemoTemplate8;
