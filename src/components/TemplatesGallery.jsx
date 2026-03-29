import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const templates = [
    { id: 1, name: 'Glassmorphic',       path: '/demo',  img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=600&h=1200' },
    { id: 2, name: 'Cinematic Flow',     path: '/demo2', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600&h=1200' },
    { id: 3, name: 'Vogue Editorial',    path: '/demo3', img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=600&h=1200' },
    { id: 4, name: 'Brutalist Night',    path: '/demo4', img: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=600&h=1200' },
    { id: 5, name: 'Fluid Aura',         path: '/demo5', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600&h=1200' },
    { id: 6, name: 'Intimate Scrapbook', path: '/demo6', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600&h=1200' },
    { id: 7, name: 'Fine Art Split',     path: '/demo7', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600&h=1200' },
    { id: 8, name: 'Kinetic Monotype',   path: '/demo8', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=1200' },
    { id: 9, name: 'Physics Overload',   path: '/demo9', img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=600&h=1200' },
];

const PhoneMockup = ({ img, activeHover }) => {
    return (
        <motion.div
            animate={{
                y: activeHover ? -20 : 0,
                boxShadow: activeHover
                    ? "0 40px 80px rgba(0,0,0,0.2)"
                    : "0 20px 40px rgba(0,0,0,0.08)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
                width: '260px',
                height: '560px',
                backgroundColor: '#111',
                borderRadius: '40px',
                padding: '12px',
                position: 'relative',
                margin: '0 auto',
                transformStyle: "preserve-3d",
                border: '1px solid #333'
            }}
        >
            {/* Notch / Dynamic Island */}
            <div style={{
                position: 'absolute',
                top: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90px',
                height: '25px',
                backgroundColor: '#111',
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
                zIndex: 10
            }} />

            {/* Power Button */}
            <div style={{ position: 'absolute', right: '-3px', top: '120px', width: '3px', height: '50px', backgroundColor: '#333', borderTopRightRadius: '3px', borderBottomRightRadius: '3px' }} />
            {/* Volume Buttons */}
            <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '40px', backgroundColor: '#333', borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px' }} />
            <div style={{ position: 'absolute', left: '-3px', top: '150px', width: '3px', height: '40px', backgroundColor: '#333', borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px' }} />

            {/* Screen */}
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                borderRadius: '30px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
            }}>
                <motion.img
                    src={img}
                    animate={{ scale: activeHover ? 1.05 : 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    alt="Template design screen"
                />
            </div>
        </motion.div>
    )
}

const PhoneCard = ({ template, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-150, 150], [12, -12]);
    const rotateY = useTransform(mouseXSpring, [-150, 150], [-12, 12]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            style={{
                backgroundColor: '#F3F4F6',
                borderRadius: '32px',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                perspective: 1200
            }}
        >
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    willChange: 'transform'
                }}
            >
                <motion.div style={{ translateZ: isHovered ? 40 : 0, transition: '0.3s' }}>
                    <PhoneMockup img={template.img} activeHover={isHovered} />
                </motion.div>
            </motion.div>

            <div style={{ marginTop: '3.5rem', textAlign: 'center', width: '100%' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#1A2F33', marginBottom: '1.5rem', fontWeight: 500 }}>{template.name}</h3>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a
                        href={template.path}
                        className="btn"
                        style={{ backgroundColor: '#166E87', color: '#fff', borderRadius: '30px', padding: '0.8rem 1.5rem', textDecoration: 'none', fontSize: '1rem', fontWeight: 500, flex: 1, transition: 'opacity 0.2s', border: '1px solid #166E87' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseOver={(e) => e.target.style.opacity = 0.8}
                        onMouseOut={(e) => e.target.style.opacity = 1}
                    >
                        Live Preview
                    </a>
                    <a
                        href={`${template.path}?personalize=true`}
                        className="btn"
                        style={{ backgroundColor: 'transparent', color: '#166E87', border: '1px solid #166E87', borderRadius: '30px', padding: '0.8rem 1.5rem', textDecoration: 'none', display: 'inline-block', fontSize: '1rem', fontWeight: 500, flex: 1, cursor: 'pointer', transition: 'background 0.2s' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseOver={(e) => { e.target.style.backgroundColor = '#166E87'; e.target.style.color = '#fff'; }}
                        onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#166E87'; }}
                    >
                        Personalize
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const TemplatesGallery = () => {
    return (
        <section className="section" id="templates" style={{ backgroundColor: '#fff', padding: '8rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', color: '#1A2F33', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>Premium Mobile Experiences</h2>
                    <p style={{ color: '#6B7280', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
                        Designed primarily for the devices your guests use most. Explore our collection of breathtaking, highly animated mobile invitations.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                    {templates.map((tpl, idx) => (
                        <PhoneCard key={tpl.id} template={tpl} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TemplatesGallery;
