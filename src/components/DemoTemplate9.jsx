import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePersonalization } from '../context/PersonalizationContext';

const DemoTemplate9 = () => {
    const { themeData } = usePersonalization();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isEntered, setIsEntered] = useState(false);

    const baseImages = [themeData.imgHero, themeData.imgDetail1, themeData.imgDetail2, themeData.imgDetail3];
    // Expand to force an infinite scrolling gallery grid
    const infiniteImagesGrid = [...baseImages, ...baseImages, ...baseImages, ...baseImages, ...baseImages, ...baseImages];

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const handleMouseMove = (e) => {
            // Normalize mouse coordinates from -0.5 to 0.5
            setMousePosition({
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.head.removeChild(link);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{ backgroundColor: '#0a0a0a', color: '#fff', width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>

            {/* Interactive Infinite Grid Layer */}
            <motion.div
                animate={{
                    x: mousePosition.x * -300,
                    y: mousePosition.y * -300
                }}
                transition={{ type: "spring", damping: 100, stiffness: 200, mass: 1 }}
                style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', display: 'flex', flexWrap: 'wrap', gap: '3vw', padding: '5vw', alignContent: 'center', justifyContent: 'center' }}
            >
                {infiniteImagesGrid.map((src, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        transition={{ delay: (i % 6) * 0.1, duration: 1.5 }}
                        whileHover={{ scale: 1.05, opacity: 1, zIndex: 10, transition: { duration: 0.3 } }}
                        style={{ width: 'clamp(150px, 15vw, 300px)', height: 'clamp(200px, 20vw, 400px)', overflow: 'hidden', borderRadius: '4px', cursor: 'crosshair', filter: 'grayscale(50%)' }}
                        whileHoverCapture={{ filter: 'grayscale(0%)' }}
                    >
                        <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Gallery" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Center Static Content Overlay */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 2, ease: "easeOut" }} style={{ background: 'rgba(10,10,10,0.8)', padding: '4rem 6rem', backdropFilter: 'blur(15px)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', pointerEvents: 'auto', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
                    <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '-2px', margin: 0, textTransform: 'uppercase' }}>{themeData.partner1} & {themeData.partner2}</h1>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '1rem', letterSpacing: '6px', color: '#888', marginTop: '1.5rem' }}>{themeData.dateFull} • {themeData.venueLocation}</p>
                    <button 
                        onClick={() => setIsEntered(true)}
                        style={{ marginTop: '4rem', padding: '1.5rem 4rem', background: isEntered ? '#4CAF50' : '#fff', color: isEntered ? '#fff' : '#000', border: 'none', fontFamily: "'Space Mono', monospace", textTransform: 'uppercase', letterSpacing: '4px', cursor: isEntered ? 'default' : 'pointer', transition: 'all 0.2s', fontWeight: 'bold' }}
                    >
                        {isEntered ? 'ACCESS GRANTED' : 'ENTER EXHIBITION'}
                    </button>
                </motion.div>
            </div>

        </div>
    );
};

export default DemoTemplate9;
