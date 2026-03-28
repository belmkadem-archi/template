import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingPhone = ({ img, top, right, rotateZ, rotateY, zIndex, delay }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: [0, -15, 0], opacity: 1 }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay }, opacity: { duration: 1.2, ease: "easeOut" } }}
            style={{
                position: 'absolute',
                top,
                right,
                zIndex,
                transformStyle: 'preserve-3d',
                transform: `rotateZ(${rotateZ}) rotateY(${rotateY}) rotateX(15deg)`,
                width: '220px',
                height: '460px',
                backgroundColor: '#1c1c1e', // Dark iPhone chassis
                borderRadius: '32px',
                padding: '10px',
                boxShadow: '-20px 40px 60px rgba(0, 50, 60, 0.4), inset 0 0 0 2px #d1d5db', // Depth shadow + Silver bezel highlight
            }}
        >
            {/* Dynamic Island Notch */}
            <div style={{
                position: 'absolute',
                top: '12px',
                left: '50%',
                transform: 'translate(-50%)',
                width: '70px',
                height: '20px',
                backgroundColor: '#1c1c1e',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                zIndex: 10
            }} />
            
            {/* Screen */}
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)'
            }}>
                <img src={img} alt="Digital Invitation Template" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            
            {/* Hardware buttons */}
            <div style={{ position: 'absolute', right: '-4px', top: '100px', width: '4px', height: '40px', backgroundColor: '#d1d5db', borderTopRightRadius: '4px', borderBottomRightRadius: '4px' }} />
            <div style={{ position: 'absolute', left: '-4px', top: '80px', width: '4px', height: '30px', backgroundColor: '#d1d5db', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px' }} />
            <div style={{ position: 'absolute', left: '-4px', top: '120px', width: '4px', height: '30px', backgroundColor: '#d1d5db', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px' }} />
        </motion.div>
    );
};

// Sleek CSS Cylindrical Pedestal
const Pedestal = ({ top, right, width, height, zIndex }) => (
    <div style={{ position: 'absolute', top, right, width, height, zIndex, transform: 'rotateX(60deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}>
        {/* Top surface */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.03)' }} />
        {/* Front Face */}
        <div style={{ position: 'absolute', bottom: '-100px', left: 0, right: 0, height: '100px', backgroundColor: '#f1f5f9', transformOrigin: 'top', transform: 'rotateX(-90deg)', border: '1px solid #e2e8f0', borderTop: 'none' }} />
        {/* Right Face */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: '-100px', width: '100px', backgroundColor: '#e2e8f0', transformOrigin: 'left', transform: 'rotateY(90deg)', border: '1px solid #cbd5e1', borderLeft: 'none' }} />
    </div>
);


const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 992);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // High quality unspash images matching the demo templates aesthetic
    const img1 = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400&h=800";
    const img2 = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=400&h=800";

    return (
        <section style={{ 
            paddingTop: '8rem', 
            minHeight: '100vh', 
            backgroundColor: '#FAFAFA', 
            display: 'flex', 
            alignItems: 'center', 
            overflow: 'hidden',
            padding: isMobile ? '10rem 2rem 4rem 2rem' : '10rem 4rem 4rem 4rem'
        }}>
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                
                {/* Left Column: Typography Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '600px', position: 'relative', zIndex: 10, textAlign: isMobile ? 'center' : 'left', margin: isMobile ? '0 auto' : '0' }}
                >
                    <h1 style={{ 
                        fontFamily: "'Playfair Display', serif", 
                        fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
                        color: '#007A90', // Teal color from the image
                        lineHeight: 1.1, 
                        marginBottom: '1.5rem',
                        letterSpacing: '-1px'
                    }}>
                        Digital Invitations
                    </h1>
                    
                    <p style={{ 
                        fontFamily: "'Inter', sans-serif", 
                        fontSize: '1.15rem', 
                        color: '#4B5563', 
                        lineHeight: 1.6, 
                        marginBottom: '2.5rem',
                        fontWeight: 300
                    }}>
                        Simplify event planning and impress your guests — with done-for-you design, smart RSVP tracking, and unlimited updates included.
                    </p>
                    
                    <a href="#templates" style={{ 
                        display: 'inline-block', 
                        backgroundColor: '#006D82', 
                        color: '#ffffff', 
                        padding: '1rem 2.5rem', 
                        borderRadius: '30px', 
                        fontSize: '1.05rem', 
                        fontWeight: 500, 
                        textDecoration: 'none',
                        transition: 'background 0.3s',
                        boxShadow: '0 4px 15px rgba(0, 122, 144, 0.3)'
                    }}>
                        View Templates
                    </a>
                </motion.div>

                {/* Right Column: 3D Scene */}
                <div style={{ position: 'relative', height: isMobile ? '500px' : '700px', width: '100%', perspective: '1000px' }}>
                    
                    {/* Teal Background Arch */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: 'absolute',
                            right: isMobile ? '50%' : '20px',
                            transform: isMobile ? 'translateX(50%)' : 'none',
                            bottom: 0,
                            width: isMobile ? '100%' : '450px',
                            height: '90%',
                            backgroundColor: '#007A90',
                            borderTopLeftRadius: '300px',
                            borderTopRightRadius: '300px',
                            zIndex: 1
                        }}
                    />

                    {/* CSS Pedestals to mimic stones/blocks */}
                    {!isMobile && (
                        <>
                            <Pedestal top="450px" right="250px" width="160px" height="160px" zIndex={2} />
                            <Pedestal top="550px" right="80px" width="120px" height="120px" zIndex={4} />
                            <Pedestal top="400px" right="-20px" width="140px" height="140px" zIndex={1} />
                        </>
                    )}

                    {/* Foreground Floating Phone (Left, Tilted right) */}
                    <FloatingPhone 
                        img={img1} 
                        top={isMobile ? "10%" : "20%"} 
                        right={isMobile ? "45%" : "25%"} 
                        rotateZ="12deg" 
                        rotateY="-15deg" 
                        zIndex={5} 
                        delay={0}
                    />

                    {/* Background Floating Phone (Right, Tilted left) */}
                    <FloatingPhone 
                        img={img2} 
                        top={isMobile ? "5%" : "10%"} 
                        right={isMobile ? "10%" : "0%"} 
                        rotateZ="-8deg" 
                        rotateY="-25deg" 
                        zIndex={3} 
                        delay={1.5}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
