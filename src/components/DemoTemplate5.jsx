import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const DemoTemplate5 = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Italiana&family=Plus+Jakarta+Sans:wght@200;400;600&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <div style={{ backgroundColor: '#fff', color: '#111', overflow: 'hidden', position: 'relative', minHeight: '150vh' }}>
            {/* Mesh Gradient Animation Background */}
            <style>{`
        @keyframes liquid {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(10vw, -10vh) scale(1.2) rotate(120deg); }
          66% { transform: translate(-15vw, 15vh) scale(0.8) rotate(240deg); }
          100% { transform: translate(0, 0) scale(1) rotate(360deg); }
        }
        .blob1 { position: fixed; top: -10vw; left: -10vw; width: 60vw; height: 60vw; background: #ffb6c1; border-radius: 50%; filter: blur(100px); animation: liquid 25s infinite alternate; mix-blend-mode: multiply; z-index: 0; opacity: 0.6; }
        .blob2 { position: fixed; bottom: -10vw; right: -10vw; width: 70vw; height: 70vw; background: #87ceeb; border-radius: 50%; filter: blur(120px); animation: liquid 30s infinite alternate-reverse; mix-blend-mode: multiply; z-index: 0; opacity: 0.6; }
        .blob3 { position: fixed; top: 30vh; left: 30vw; width: 50vw; height: 50vw; background: #e6e6fa; border-radius: 50%; filter: blur(90px); animation: liquid 20s infinite alternate; mix-blend-mode: multiply; z-index: 0; opacity: 0.6; }
      `}</style>

            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="blob3"></div>

            {/* Main Glassmorphic Container floating in the center */}
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ padding: '5rem', background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', borderRadius: '60px', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 40px 100px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, letterSpacing: '8px', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '2rem', color: '#555' }}>We Invite You To The Future of Love</h2>
                    <h1 style={{ fontFamily: "'Italiana', serif", fontSize: 'clamp(5rem, 15vw, 12rem)', lineHeight: 0.8, marginBottom: '2rem', color: '#111' }}>Emma <br /><span style={{ fontSize: '0.4em', verticalAlign: 'middle', fontFamily: "'Plus Jakarta Sans'", fontWeight: 200, color: '#ffb6c1' }}>&</span><br /> Liam</h1>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.1rem', letterSpacing: '4px', opacity: 0.9, marginTop: '2rem', color: '#333' }}>NOVEMBER 12, 2026 • THE GLASSHOUSE</p>
                </motion.div>
            </div>

            <div style={{ position: 'relative', zIndex: 10, padding: '10vh 2rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }} style={{ flex: '1 1 400px', textAlign: 'left', padding: '4rem', background: 'rgba(255,255,255,0.4)', borderRadius: '40px', backdropFilter: 'blur(20px)' }}>
                    <h2 style={{ fontFamily: "'Italiana', serif", fontSize: '4rem', marginBottom: '2rem' }}>A Dream Realized</h2>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.2rem', lineHeight: 2, fontWeight: 300, color: '#333' }}>
                        Join us in an ethereal setting as we exchange vows suspended between earth and sky. An evening of transparent romance, light, and boundless joy awaits.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }} style={{ flex: '1 1 400px', textAlign: 'left', padding: '4rem', background: 'rgba(255,255,255,0.4)', borderRadius: '40px', backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ fontFamily: "'Italiana', serif", fontSize: '3rem', marginBottom: '2rem' }}>Guest Access</h2>
                    <input type="text" placeholder="Your Digital Identifier (Name)" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid currentColor', padding: '1rem 0', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.2rem', marginBottom: '2rem', outline: 'none' }} />
                    <button style={{ padding: '1.5rem 0', borderRadius: '100px', border: 'none', background: '#111', color: '#fff', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '4px', textTransform: 'uppercase', cursor: 'pointer', transition: 'transform 0.3s' }}>Enter The Portal</button>
                </motion.div>
            </div>
        </div>
    );
};

export default DemoTemplate5;
