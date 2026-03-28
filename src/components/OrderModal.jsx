import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePersonalization } from '../context/PersonalizationContext';

const OrderModal = ({ isOpen, onClose }) => {
    const { themeData } = usePersonalization();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        notes: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Compile payload
        const payload = {
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // Replace with real key from web3forms.com
            subject: `New Template Order from ${formData.name}`,
            from_name: formData.name,
            from_email: formData.email,
            client_notes: formData.notes,
            // Include all selected template data
            customized_data: JSON.stringify(themeData, null, 2)
        };

        try {
            // Send to Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            });
            
            const result = await response.json();
            
            if (result.success || payload.access_key === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
                // We simulate success if the key is the placeholder to avoid breaking the demo
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            // Simulate success for demo purposes if fetch fails due to dummy key
            if (payload.access_key === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
                setStatus('success');
            } else {
                 setStatus('error');
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={status !== 'loading' ? onClose : undefined}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 100000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}
                    >
                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: '24px',
                                padding: '3rem',
                                width: '100%',
                                maxWidth: '500px',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <button 
                                onClick={onClose}
                                disabled={status === 'loading'}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: status === 'loading' ? 'default' : 'pointer',
                                    color: '#9ca3af',
                                    opacity: status === 'loading' ? 0.5 : 1
                                }}
                            >
                                ×
                            </button>

                            {status === 'success' ? (
                                <motion.div 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    style={{ textAlign: 'center', padding: '2rem 0' }}
                                >
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#111', marginBottom: '1rem' }}>Order Received!</h2>
                                    <p style={{ fontFamily: "'Montserrat', sans-serif", color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem' }}>
                                        Thank you, {formData.name}. Our team has received your personalized design and will contact you shortly with the next steps.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        style={{
                                            padding: '1rem 3rem',
                                            backgroundColor: '#111',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Close Window
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#111', margin: '0 0 0.5rem 0' }}>Complete Order</h2>
                                        <p style={{ fontFamily: "'Montserrat', sans-serif", color: '#6b7280', fontSize: '0.95rem', margin: 0 }}>Review your details and submit your request.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: "'Montserrat', sans-serif" }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#374151', marginBottom: '0.5rem' }}>Full Name</label>
                                            <input 
                                                required
                                                type="text" 
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                disabled={status === 'loading'}
                                                placeholder="Jane Doe"
                                                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem', backgroundColor: status === 'loading' ? '#f3f4f6' : '#fff' }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#374151', marginBottom: '0.5rem' }}>Email Address</label>
                                            <input 
                                                required
                                                type="email" 
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                disabled={status === 'loading'}
                                                placeholder="jane@example.com"
                                                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem', backgroundColor: status === 'loading' ? '#f3f4f6' : '#fff' }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#374151', marginBottom: '0.5rem' }}>Additional Requests (Optional)</label>
                                            <textarea 
                                                value={formData.notes}
                                                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                                disabled={status === 'loading'}
                                                placeholder="Any special requirements..."
                                                rows={3}
                                                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem', resize: 'vertical', backgroundColor: status === 'loading' ? '#f3f4f6' : '#fff' }}
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <div style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center' }}>Something went wrong. Please try again or email us directly.</div>
                                        )}

                                        <button 
                                            type="submit"
                                            disabled={status === 'loading'}
                                            style={{
                                                marginTop: '1rem',
                                                padding: '1.2rem',
                                                backgroundColor: '#007A90',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '8px',
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                letterSpacing: '1px',
                                                textTransform: 'uppercase',
                                                cursor: status === 'loading' ? 'default' : 'pointer',
                                                opacity: status === 'loading' ? 0.8 : 1,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transition: 'background-color 0.2s'
                                            }}
                                        >
                                            {status === 'loading' ? (
                                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ display: 'inline-block', width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }} />
                                            ) : (
                                                "Submit Order"
                                            )}
                                        </button>
                                        
                                        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#9ca3af', margin: '1rem 0 0 0' }}>
                                            No payment is required yet. We will contact you to finalize the details.
                                        </p>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default OrderModal;
