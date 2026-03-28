import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", // couple
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop", // hands
    "https://images.unsplash.com/photo-1544078755-9a849f50e82c?q=80&w=800&auto=format&fit=crop", // rings
];

const tapeBlock = { position: 'absolute', width: '120px', height: '30px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(4px)', top: '-15px', left: '50%', transform: 'translateX(-50%) rotate(-4deg)', zIndex: 5, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' };

const Polaroid = ({ src, rotate, x, y, delay }) => (
    <motion.div
        initial={{ opacity: 0, rotate: rotate - 20, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 1.2, type: "spring", stiffness: 50 }}
        whileHover={{ scale: 1.05, zIndex: 20, rotate: 0 }}
        style={{ position: 'absolute', left: x, top: y, padding: '20px 20px 70px 20px', background: '#fff', boxShadow: '0 20px 50px rgba(0,0,0,0.2)', borderRadius: '2px', zIndex: 10, cursor: 'pointer' }}
    >
        <div style={tapeBlock} />
        <img src={src} style={{ width: 'clamp(200px, 25vw, 400px)', height: 'clamp(250px, 30vw, 500px)', objectFit: 'cover' }} alt="Memory" />
    </motion.div>
);

const DemoTemplate6 = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Special+Elite&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <div style={{ backgroundColor: '#f4f0e6', minHeight: '200vh', overflow: 'hidden', position: 'relative', backgroundImage: 'url("https://www.transparenttextures.com/patterns/notebook-dark.png")' }}>

            {/* Title */}
            <div style={{ position: 'absolute', top: '10vh', left: '10vw', zIndex: 2 }}>
                <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring" }} style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(6rem, 15vw, 12rem)', color: '#2a2a2a', transform: 'rotate(-5deg)', margin: 0 }}>
                    Chloe & Sam
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontFamily: "'Special Elite', cursive", fontSize: '2rem', color: '#555', marginLeft: '4rem', marginTop: '-2rem' }}>
                    are finally tying the knot!
                </motion.p>
            </div>

            {/* Scattered Polaroids - Shifted far right to avoid text overlapping */}
            <Polaroid src={images[0]} rotate={-8} x="65vw" y="5vh" delay={0.2} />
            <Polaroid src={images[1]} rotate={12} x="55vw" y="45vh" delay={0.4} />
            <Polaroid src={images[2]} rotate={-4} x="70vw" y="80vh" delay={0.6} />

            {/* Hand-written Note */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1 }} style={{ position: 'absolute', top: '110vh', left: '10vw', maxWidth: '500px', background: 'rgba(255,255,255,0.7)', padding: '3rem', borderRadius: '4px', transform: 'rotate(2deg)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ ...tapeBlock, left: '50%', top: '-15px', transform: 'translateX(-50%) rotate(2deg)' }} />
                <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '5rem', color: '#2a2a2a', marginBottom: '1rem', lineHeight: 0.8 }}>The Details</h2>
                <p style={{ fontFamily: "'Special Elite', cursive", fontSize: '1.4rem', lineHeight: 2, color: '#333' }}>
                    We can't wait to see you there.<br /><br />
                    <span style={{ fontWeight: 'bold' }}>Date:</span> August 14th, 2026<br />
                    <span style={{ fontWeight: 'bold' }}>Venue:</span> The Old Barn, Willow Creek.<br />
                    <span style={{ fontWeight: 'bold' }}>Dress Code:</span> Come as you are, ready to dance!
                </p>
                <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', flexDirection: 'column' }}>
                    <label style={{ fontFamily: "'Special Elite', cursive", fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
                        <input type="checkbox" style={{ transform: 'scale(1.8)', accentColor: '#2a2a2a' }} /> Heck yes!
                    </label>
                    <label style={{ fontFamily: "'Special Elite', cursive", fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
                        <input type="checkbox" style={{ transform: 'scale(1.8)', accentColor: '#2a2a2a' }} /> Sadly no
                    </label>
                </div>
            </motion.div>

        </div>
    );
};

export default DemoTemplate6;
