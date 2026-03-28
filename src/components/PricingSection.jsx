import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
    return (
        <section className="section" id="pricing">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>Simple Pricing</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontWeight: 300 }}>
                        One flat rate for infinite elegance.
                    </p>
                </div>

                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ backgroundColor: 'var(--color-bg-alt)', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid var(--color-border)', textAlign: 'center' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>DIY Template</h3>
                        <div style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '2rem' }}>$49</div>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> <span>Full Template Access</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> <span>Instant Download Link</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> <span>Self-Editing via Canva</span></li>
                        </ul>
                        <button className="btn btn-outline" style={{ width: '100%' }}>Get Started</button>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '24px', padding: '3rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'absolute', top: '1.5rem', right: '-2rem', fontSize: '0.75rem', backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.25rem 3rem', transform: 'rotate(45deg)', textTransform: 'uppercase', letterSpacing: '1px' }}>Popular</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}>Full Service</h3>
                        <div style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'white', marginBottom: '2rem' }}>$199</div>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'rgba(255,255,255,0.8)' }}>✓</span> <span>We design everything for you</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'rgba(255,255,255,0.8)' }}>✓</span> <span>Custom RSVP Tracking</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'rgba(255,255,255,0.8)' }}>✓</span> <span>Dedicated Event URL</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'rgba(255,255,255,0.8)' }}>✓</span> <span>2 Rounds of Revisions</span></li>
                        </ul>
                        <button className="btn" style={{ width: '100%', backgroundColor: 'white', color: 'var(--color-primary)' }}>Order Now</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
