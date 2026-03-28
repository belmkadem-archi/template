import React, { useState, useEffect } from 'react';
import { Menu, Camera, MessageCircle } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
            padding: '1.25rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>
                    WG.
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <a href="#" style={{ color: 'var(--color-primary)', transition: 'opacity 0.2s', opacity: 0.8 }}><Camera size={20} /></a>
                    <a href="#" style={{ color: 'var(--color-primary)', transition: 'opacity 0.2s', opacity: 0.8 }}><MessageCircle size={20} /></a>
                    <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0,66,66,0.05)' }}>
                        <Menu size={20} color="var(--color-primary)" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
