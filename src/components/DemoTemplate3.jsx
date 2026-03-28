import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePersonalization } from '../context/PersonalizationContext';

const DemoTemplate3 = () => {
    const { themeData } = usePersonalization();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // The magic for horizontal scroll:
    // Move from 0% left to -66.6% left over the vertical scroll height.
    // We have 3 "screens" wide, meaning we need to shift by -200vw or roughly -66.66% of the 300vw container.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&family=Jost:wght@200;300;400&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <>
            <style>{`
        .grain {
          position: fixed; inset: 0; z-index: 50; pointer-events: none;
          background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
          opacity: 0.05;
        }
      `}</style>
            <div className="grain"></div>

            {/* 400vh tall to allow significant scroll room */}
            <div ref={targetRef} style={{ height: '400vh', background: '#e5e3db', color: '#111' }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

                    <motion.div style={{ x, display: 'flex', width: '300vw', height: '100%', alignItems: 'center' }}>

                        {/* Panel 1: The Magazine Cover */}
                        <div style={{ width: '100vw', height: '100%', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(5rem, 18vw, 20rem)', lineHeight: 0.8, zIndex: 2, position: 'absolute', top: '15%', left: '5%', color: '#111', textTransform: 'uppercase' }}>THE<br />UNION</h1>
                            <div style={{ position: 'absolute', right: '10%', bottom: '0', width: '45vw', height: '80vh', overflow: 'hidden' }}>
                                <img src={themeData.imgHero} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} alt="Editorial Couple" />
                            </div>
                            <div style={{ position: 'absolute', left: '5%', bottom: '5%', fontFamily: "'Jost', sans-serif", fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                Vol. 1 — {themeData.dateStr}<br />{themeData.venueLocation}
                            </div>

                            {/* Scroll indicator */}
                            <motion.div
                                animate={{ x: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                style={{ position: 'absolute', right: '5%', top: '50%', fontFamily: "'Jost', sans-serif", fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '4px', transform: 'rotate(-90deg)', transformOrigin: 'right center' }}
                            >
                                Scroll Down
                            </motion.div>
                        </div>

                        {/* Panel 2: The Details */}
                        <div style={{ width: '100vw', height: '100%', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '35vw', height: '60vh', position: 'absolute', left: '10%', top: '20%', zIndex: 1, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
                                <img src={themeData.imgDetail1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Detail" />
                            </div>
                            <div style={{ zIndex: 2, background: themeData.bgColor || '#e5e3db', padding: '4rem', maxWidth: '500px', marginLeft: '30vw', border: '1px solid rgba(17,17,17,0.1)' }}>
                                <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '4rem', marginBottom: '2rem', fontStyle: 'italic', color: themeData.primaryColor || '#111' }}>You Are Invited</h2>
                                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '1.2rem', lineHeight: 1.8, fontWeight: 300, color: themeData.textColor || '#111', whiteSpace: 'pre-line' }}>{themeData.customMessage}</p>
                            </div>
                        </div>

                        {/* Panel 3: RSVP */}
                        <div style={{ width: '100vw', height: '100%', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: '#111', color: '#e5e3db' }}>
                            <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                                <img src={themeData.imgDetail2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Moody" />
                            </div>
                            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '12rem', marginBottom: '1rem', fontStyle: 'italic' }}>RSVP</h2>
                                <p style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '4px', marginBottom: '4rem', opacity: 0.7 }}>AWAITING YOUR RESPONSE</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ fontFamily: "'Jost', sans-serif", background: '#e5e3db', color: '#111', border: 'none', padding: '1.2rem 4rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '4px', cursor: 'pointer', fontWeight: 500 }}
                                >
                                    Confirm
                                </motion.button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default DemoTemplate3;
