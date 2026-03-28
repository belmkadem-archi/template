import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Generate a larger array of images by duplicating for the infinite grid feel
const baseImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop"
];
const images = [...baseImages, ...baseImages, ...baseImages];

const DemoTemplate9 = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
                {images.map((src, i) => (
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
                    <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '-2px', margin: 0, textTransform: 'uppercase' }}>AUSTIN & BLAIR</h1>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '1rem', letterSpacing: '6px', color: '#888', marginTop: '1.5rem' }}>THE INTERACTIVE EXPERIENCE</p>
                    <button style={{ marginTop: '4rem', padding: '1.5rem 4rem', background: '#fff', color: '#000', border: 'none', fontFamily: "'Space Mono', monospace", textTransform: 'uppercase', letterSpacing: '4px', cursor: 'pointer', transition: 'transform 0.2s', fontWeight: 'bold' }}>ENTER EXHIBITION</button>
                </motion.div>
            </div>

        </div>
    );
};

export default DemoTemplate9;
