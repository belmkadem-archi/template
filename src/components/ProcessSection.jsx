import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Choose Design', desc: 'Select from our curated collection of premium templates that match your vibe.' },
    { num: '02', title: 'Content', desc: 'Provide your details, photos, and itinerary. We handle the complex layout formatting.' },
    { num: '03', title: 'Refine', desc: 'Receive a live staging link. We ensure everything is pixel-perfect before launch.' },
    { num: '04', title: 'Send', desc: 'Share your unique URL via WhatsApp, SMS, or Email and watch the RSVPs roll in.' },
];

const ProcessSection = () => {
    return (
        <section className="section section-alt" id="how-it-works">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>How It Works</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontWeight: 300 }}>
                        A seamless process from selection to send-off.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            style={{ padding: '2.5rem 2rem', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{ fontSize: '4.5rem', fontFamily: 'var(--font-serif)', color: 'rgba(0,66,66,0.04)', fontWeight: 700, position: 'absolute', top: '-0.5rem', right: '1rem', lineHeight: 1 }}>
                                {step.num}
                            </div>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)', marginTop: '1rem' }}>{step.title}</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontWeight: 300 }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
