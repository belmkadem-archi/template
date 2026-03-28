import React from 'react';
import { Camera, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0 2rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                        WG.
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '400px', marginBottom: '2rem', fontWeight: 300 }}>
                        Premium digital invitations for modern events. We blend timeless elegance with seamless technology.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}><Camera size={24} /></a>
                        <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}><MessageCircle size={24} /></a>
                        <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}><Mail size={24} /></a>
                    </div>
                </div>
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                    &copy; {new Date().getFullYear()} Webgency Invitations. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
