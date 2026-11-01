import React, { useState } from 'react';
import { Camera, X, Eye } from 'lucide-react';
import { restaurantGallery } from '../data/restaurantData';

export const AmbianceGallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="ambiance" className="section-wrapper" style={{ background: '#121013' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Camera size={14} color="var(--color-gold-candle)" />
            Atmosphere & Courtyard
          </span>
          <h2 className="section-title">The Royal Dining Ambiance</h2>
          <p className="section-subtitle">
            Immerse yourself in candlelit palace architecture, handcrafted stone jharokhas, and intimate starlit courtyards.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {restaurantGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="dining-card"
              style={{
                position: 'relative',
                height: '320px',
                cursor: 'pointer',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(18, 16, 19, 0.95) 0%, rgba(18, 16, 19, 0.2) 65%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <span style={{ fontSize: '0.74rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {item.category}
                </span>
                <h4 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '0.35rem' }}>
                  {item.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-gold-light)', fontSize: '0.78rem', fontWeight: 600 }}>
                  <Eye size={13} /> Tap to expand photo
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 3000,
              background: 'rgba(10, 8, 11, 0.95)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem',
            }}
            onClick={() => setActivePhoto(null)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '850px',
                width: '100%',
                background: '#1C181E',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--color-gold-border)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.7)',
                  border: '1px solid var(--color-gold-border)',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
                aria-label="Close photo"
              >
                <X size={18} />
              </button>

              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                style={{ width: '100%', maxHeight: '65vh', objectFit: 'cover', display: 'block' }}
              />

              <div style={{ padding: '1.5rem 2rem' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                  {activePhoto.category}
                </span>
                <h3 style={{ fontSize: '1.45rem', color: '#FFF', marginBottom: '0.5rem' }}>
                  {activePhoto.title}
                </h3>
                <p style={{ color: 'var(--color-cream-muted)', fontSize: '0.94rem' }}>
                  {activePhoto.desc}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

