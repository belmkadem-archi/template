import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { usePersonalization } from '../context/PersonalizationContext';

// ─────────────────────────────────────────────
//  EmailJS Configuration
//  Sign up free at https://www.emailjs.com
//  Then fill in these 3 values:
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEFgh...'
const OWNER_TEMPLATE_ID   = 'YOUR_OWNER_TEMPLATE_ID';   // template that notifies YOU
const CLIENT_TEMPLATE_ID  = 'YOUR_CLIENT_TEMPLATE_ID';  // template that confirms to CLIENT
// ─────────────────────────────────────────────

const OrderModal = ({ isOpen, onClose }) => {
    const { themeData } = usePersonalization();
    const [status, setStatus]     = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', notes: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        // Shared data available in both email templates
        const templateVars = {
            from_name:    formData.name,
            from_email:   formData.email,
            client_notes: formData.notes || 'None',
            to_name:      formData.name,
            to_email:     formData.email,
            partner1:     themeData.partner1,
            partner2:     themeData.partner2,
            wedding_date: themeData.dateFull,
            venue_title:  themeData.venueTitle,
            venue_loc:    themeData.venueLocation,
            order_message: themeData.customMessage,
            primary_color: themeData.primaryColor,
            accent_color:  themeData.accentColor,
            bg_color:      themeData.bgColor,
            text_color:    themeData.textColor,
            hero_image:    themeData.imgHero,
        };

        try {
            emailjs.init(EMAILJS_PUBLIC_KEY);

            // 1. Notify the owner (you)
            await emailjs.send(EMAILJS_SERVICE_ID, OWNER_TEMPLATE_ID, templateVars);

            // 2. Send confirmation to the client
            await emailjs.send(EMAILJS_SERVICE_ID, CLIENT_TEMPLATE_ID, templateVars);

            setStatus('success');
        } catch (err) {
            console.error('[EmailJS] Error:', err);
            setErrorMsg(err?.text || 'Could not send email. Please try again.');
            setStatus('error');
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        outline: 'none',
        fontSize: '1rem',
        backgroundColor: status === 'loading' ? '#f3f4f6' : '#fff',
        fontFamily: "'Montserrat', sans-serif",
        boxSizing: 'border-box',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.8rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#374151',
        marginBottom: '0.5rem',
        fontFamily: "'Montserrat', sans-serif",
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={status !== 'loading' ? onClose : undefined}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        backdropFilter: 'blur(12px)',
                        zIndex: 100000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                            borderRadius: '24px',
                            padding: '3rem',
                            width: '100%',
                            maxWidth: '520px',
                            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.3)',
                            position: 'relative',
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            disabled={status === 'loading'}
                            style={{
                                position: 'absolute', top: '1.5rem', right: '1.5rem',
                                background: 'rgba(0,0,0,0.05)', border: 'none',
                                width: '36px', height: '36px', borderRadius: '50%',
                                fontSize: '1.2rem', cursor: status === 'loading' ? 'default' : 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#6b7280',
                            }}
                        >×</button>

                        {/* Success state */}
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ textAlign: 'center', padding: '1rem 0' }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', delay: 0.1 }}
                                    style={{
                                        width: '90px', height: '90px', borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #4CAF50, #2e7d32)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 2rem', boxShadow: '0 10px 30px rgba(76,175,80,0.4)',
                                    }}
                                >
                                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </motion.div>
                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', color: '#111', marginBottom: '1rem' }}>
                                    Order Confirmed! 🎉
                                </h2>
                                <p style={{ fontFamily: "'Montserrat', sans-serif", color: '#4b5563', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                                    Thank you, <strong>{formData.name}</strong>!
                                </p>
                                <p style={{ fontFamily: "'Montserrat', sans-serif", color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    A confirmation email has been sent to <strong>{formData.email}</strong>.<br />
                                    Our team will contact you within <strong>24 hours</strong> with the next steps and your finalized invitation.
                                </p>
                                <button
                                    onClick={() => { onClose(); setStatus('idle'); setFormData({ name: '', email: '', notes: '' }); }}
                                    style={{
                                        padding: '1rem 3rem', backgroundColor: '#111', color: '#fff',
                                        border: 'none', borderRadius: '8px', fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s',
                                    }}
                                >
                                    Close Window
                                </button>
                            </motion.div>
                        ) : (
                            <>
                                {/* Header */}
                                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💍</div>
                                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#111', margin: '0 0 0.5rem' }}>
                                        Complete Your Order
                                    </h2>
                                    <p style={{ fontFamily: "'Montserrat', sans-serif", color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>
                                        You will receive a confirmation email instantly.
                                    </p>
                                </div>

                                {/* Template preview strip */}
                                <div style={{
                                    background: 'linear-gradient(135deg, rgba(0,122,144,0.08), rgba(0,122,144,0.03))',
                                    border: '1px solid rgba(0,122,144,0.15)',
                                    borderRadius: '12px',
                                    padding: '1rem 1.5rem',
                                    marginBottom: '2rem',
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: '0.85rem',
                                    color: '#374151',
                                }}>
                                    <div style={{ fontWeight: 600, color: '#007A90', marginBottom: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Design Summary</div>
                                    <div>💑 {themeData.partner1} &amp; {themeData.partner2}</div>
                                    <div>📅 {themeData.dateFull}</div>
                                    <div>📍 {themeData.venueTitle}, {themeData.venueLocation}</div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    <div>
                                        <label style={labelStyle}>Full Name</label>
                                        <input
                                            required type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            disabled={status === 'loading'}
                                            placeholder="Jane & John Doe"
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Email Address</label>
                                        <input
                                            required type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            disabled={status === 'loading'}
                                            placeholder="jane@example.com"
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Additional Requests <span style={{ fontWeight: 400, textTransform: 'none', opacity: 0.6 }}>(optional)</span></label>
                                        <textarea
                                            value={formData.notes}
                                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                            disabled={status === 'loading'}
                                            placeholder="e.g. Please add an extra RSVP section..."
                                            rows={3}
                                            style={{ ...inputStyle, resize: 'vertical' }}
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <div style={{
                                            color: '#dc2626', fontSize: '0.85rem',
                                            padding: '0.8rem 1rem', background: '#fef2f2',
                                            borderRadius: '8px', border: '1px solid #fecaca',
                                            fontFamily: "'Montserrat', sans-serif",
                                        }}>
                                            ⚠️ {errorMsg}
                                        </div>
                                    )}

                                    <motion.button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                                        whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                                        style={{
                                            marginTop: '0.5rem',
                                            padding: '1.2rem',
                                            background: status === 'loading'
                                                ? '#6b7280'
                                                : 'linear-gradient(135deg, #007A90, #005f70)',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '10px',
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: 700,
                                            fontSize: '1rem',
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase',
                                            cursor: status === 'loading' ? 'default' : 'pointer',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px',
                                            boxShadow: '0 4px 15px rgba(0,122,144,0.3)',
                                        }}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                                                    style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }}
                                                />
                                                Sending emails...
                                            </>
                                        ) : (
                                            '📩 Submit & Get Confirmation Email'
                                        )}
                                    </motion.button>

                                    <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#9ca3af', margin: '0.5rem 0 0', fontFamily: "'Montserrat', sans-serif" }}>
                                        🔒 No payment required now. We'll contact you within 24 hours.
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OrderModal;
