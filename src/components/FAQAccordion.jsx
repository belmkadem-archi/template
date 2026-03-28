import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    { q: "How long does the full service take?", a: "Typically, we deliver the first draft within 3 business days of receiving your content." },
    { q: "Can I collect RSVPs automatically?", a: "Yes, our full service includes an integrated RSVP form that updates a private spreadsheet for you in real-time." },
    { q: "Can I use my own domain name?", a: "Absolutely. We can connect your customized digital invitation to any custom domain you own for an additional setup fee." },
    { q: "Are the designs mobile-friendly?", a: "Yes, all our templates are designed 'mobile-first' to ensure a perfect experience on any smartphone device." },
];

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="section section-alt" id="faq" style={{ paddingBottom: '8rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>Questions?</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, idx) => (
                        <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                            <button
                                onClick={() => toggle(idx)}
                                style={{ width: '100%', padding: '1.5rem', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontWeight: 600 }}
                            >
                                <span>{faq.q}</span>
                                <motion.span
                                    animate={{ rotate: openIndex === idx ? 45 : 0 }}
                                    style={{ fontSize: '1.5rem', fontWeight: 300, display: 'inline-block' }}
                                >+</motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--color-text-muted)', lineHeight: 1.6, fontWeight: 300 }}>
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
