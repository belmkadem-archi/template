import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { usePersonalization } from '../context/PersonalizationContext';

const DemoTemplate2 = () => {
    const { themeData } = usePersonalization();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Smooth scroll progress for parallax effects
    const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });

    // Hero Parallax
    const heroY = useTransform(smoothProgress, [0, 0.2], [0, 150]);
    const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.05]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

    // Gallery Parallax
    const img1Y = useTransform(smoothProgress, [0.1, 0.4], [100, -100]);
    const img2Y = useTransform(smoothProgress, [0.2, 0.5], [150, -50]);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Monsieur+La+Doulaise&family=Montserrat:wght@200;300;400&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    const theme = {
        script: "'Monsieur La Doulaise', cursive",
        serif: "'Cinzel', serif",
        sans: "'Montserrat', sans-serif",
        bg: themeData.bgColor,
        dark: themeData.textColor,
        gold: themeData.accentColor
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <div ref={containerRef} style={{ backgroundColor: theme.bg, color: theme.dark, overflowX: 'hidden' }}>

            {/* 1. Epic Photo Hero */}
            <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                    style={{ width: '100%', height: '110%', position: 'absolute', top: '-5%', y: heroY, scale: heroScale }}
                >
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)', zIndex: 1 }} />
                    <img src={themeData.imgHero} alt="Hero Couple" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>

                <motion.div
                    style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff', opacity: heroOpacity }}
                >
                    <motion.div initial={{ opacity: 0, letterSpacing: '0px' }} animate={{ opacity: 1, letterSpacing: '10px' }} transition={{ duration: 2, ease: 'easeOut' }} style={{ fontFamily: theme.sans, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '3rem' }}>
                        We Invite You To Celebrate
                    </motion.div>
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <motion.h1 variants={textVariants} style={{ fontFamily: theme.script, fontSize: 'clamp(6rem, 15vw, 15rem)', lineHeight: 0.8, color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>{themeData.partner1}</motion.h1>
                        <motion.span variants={textVariants} style={{ fontFamily: theme.serif, fontSize: 'clamp(2rem, 4vw, 4rem)', color: theme.gold, margin: '1rem 0', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>&</motion.span>
                        <motion.h1 variants={textVariants} style={{ fontFamily: theme.script, fontSize: 'clamp(6rem, 15vw, 15rem)', lineHeight: 0.8, color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>{themeData.partner2}</motion.h1>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. Overlapping Photo Story & Text */}
            <section style={{ padding: '12rem 2rem', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '6rem' }}>

                    <motion.div
                        style={{ flex: '1 1 400px', y: img1Y }}
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
                    >
                        <div style={{ position: 'relative', padding: '1rem', background: '#fff', boxShadow: '0 25px 60px rgba(0,0,0,0.1)', borderRadius: '4px' }}>
                            <img src={themeData.imgDetail3} alt="Love Story Image" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2px' }} />
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ flex: '1 1 400px', textAlign: 'center' }}
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                    >
                        <motion.h2 variants={textVariants} style={{ fontFamily: theme.serif, fontSize: '3.5rem', marginBottom: '2rem' }}>Our Love Story</motion.h2>
                        <motion.p variants={textVariants} style={{ fontFamily: theme.sans, fontSize: '1.2rem', lineHeight: 2, fontWeight: 300, color: '#555', whiteSpace: 'pre-line' }}>
                            {themeData.customMessage}
                        </motion.p>
                    </motion.div>

                </div>
            </section>

            {/* 3. The Venue with Massive Parallax */}
            <section style={{ position: 'relative', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <motion.div
                    style={{ position: 'absolute', inset: 0, y: useTransform(smoothProgress, [0.3, 0.7], [-150, 150]) }}
                >
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(26,26,26,0.5)', zIndex: 1 }} />
                    <img src={themeData.imgDetail2} alt="Venue" style={{ width: '100%', height: '130%', objectFit: 'cover' }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }}
                    style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', border: `1px solid rgba(197, 168, 128, 0.5)`, padding: '5rem', backdropFilter: 'blur(15px)', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '2px' }}
                >
                    <h3 style={{ fontFamily: theme.script, fontSize: '6rem', marginBottom: '1rem', color: theme.gold }}>The Venue</h3>
                    <p style={{ fontFamily: theme.serif, fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '2px' }}>{themeData.venueTitle}</p>
                    <p style={{ fontFamily: theme.sans, fontSize: '1.1rem', letterSpacing: '8px', textTransform: 'uppercase', opacity: 0.8 }}>{themeData.venueLocation}</p>
                </motion.div>
            </section>

            {/* 4. Elegant Details & Rings */}
            <section style={{ padding: '12rem 2rem', position: 'relative' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '6rem' }}>

                    <motion.div
                        style={{ flex: '1 1 400px', textAlign: 'center' }}
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                    >
                        <motion.h3 variants={textVariants} style={{ fontFamily: theme.script, fontSize: '7rem', color: theme.gold, lineHeight: 0.8 }}>Details</motion.h3>
                        <motion.div variants={textVariants} style={{ margin: '4rem 0', padding: '2rem 0', borderTop: `1px solid rgba(197, 168, 128, 0.3)`, borderBottom: `1px solid rgba(197, 168, 128, 0.3)` }}>
                            <h4 style={{ fontFamily: theme.serif, fontSize: '1.8rem', marginBottom: '0.8rem' }}>Dress Code</h4>
                            <p style={{ fontFamily: theme.sans, fontWeight: 300, color: '#555', fontSize: '1.1rem' }}>Black Tie Elegance</p>
                        </motion.div>
                        <motion.div variants={textVariants}>
                            <h4 style={{ fontFamily: theme.serif, fontSize: '1.8rem', marginBottom: '0.8rem' }}>Gifts</h4>
                            <p style={{ fontFamily: theme.sans, fontWeight: 300, color: '#555', fontSize: '1.1rem' }}>Your presence is the greatest gift of all.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        style={{ flex: '1 1 400px', y: img2Y }}
                        initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <div style={{ borderRadius: '150px 150px 0 0', overflow: 'hidden', height: '650px', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                                src={themeData.imgDetail1} alt="Styling Details" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* 5. Big Animated RSVP */}
            <section style={{ padding: '10rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.dark, color: theme.bg }}>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: theme.script, fontSize: 'clamp(6rem, 15vw, 10rem)', color: theme.gold, marginBottom: '2rem', lineHeight: 0.8 }}>RSVP</h2>
                    <p style={{ fontFamily: theme.sans, letterSpacing: '4px', fontWeight: 200, marginBottom: '5rem', opacity: 0.7 }}>PLEASE RESPOND BY {themeData.dateStr}</p>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: theme.gold, color: theme.dark }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: 'transparent',
                            border: `1px solid ${theme.gold}`,
                            color: theme.gold,
                            padding: '1.5rem 5rem',
                            fontFamily: theme.serif,
                            fontSize: '1.8rem',
                            cursor: 'pointer',
                            transition: 'background-color 0.4s ease, color 0.4s ease'
                        }}
                    >
                        Accept with Pleasure
                    </motion.button>
                </motion.div>
            </section>

        </div>
    );
};

export default DemoTemplate2;
