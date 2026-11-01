import React from 'react';
import { MapPin, Phone, Clock, Car, Star, ShieldCheck, MessageCircle } from 'lucide-react';
import { restaurantInfo, guestReviews } from '../data/restaurantData';

export const TimingsLocation = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello The Pink City Kitchen! I would like directions / parking information for our dinner reservation tonight.`
    );
    window.open(`https://wa.me/${restaurantInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="location" className="section-wrapper" style={{ background: '#171419' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Clock size={14} color="var(--color-gold-candle)" />
            Hours & Heritage Location
          </span>
          <h2 className="section-title">Join Us In The Heart of C-Scheme</h2>
          <p className="section-subtitle">
            Centrally situated opposite Jaipur Central Park with convenient valet parking and tranquil courtyard gardens.
          </p>
        </div>

        {/* 2-Column Grid: Hours/Info & Verified Demo Reviews */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
        >
          {/* Info Card */}
          <div className="dining-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '1.5rem', borderBottom: '1px solid rgba(229, 184, 105, 0.2)', paddingBottom: '0.75rem' }}>
              Dining Hours & Address
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Clock size={20} color="var(--color-gold-candle)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ color: '#FFF', display: 'block', fontSize: '0.94rem' }}>Operating Hours (All 7 Days)</strong>
                  <span style={{ fontSize: '0.86rem', color: 'var(--color-cream-muted)', display: 'block' }}>
                    Lunch Service: {restaurantInfo.lunchHours}
                  </span>
                  <span style={{ fontSize: '0.86rem', color: 'var(--color-cream-muted)', display: 'block' }}>
                    Dinner Service: {restaurantInfo.dinnerHours}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <MapPin size={20} color="var(--color-gold-candle)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ color: '#FFF', display: 'block', fontSize: '0.94rem' }}>Restaurant Address</strong>
                  <span style={{ fontSize: '0.86rem', color: 'var(--color-cream-muted)' }}>
                    {restaurantInfo.address}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Car size={20} color="var(--color-gold-candle)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ color: '#FFF', display: 'block', fontSize: '0.94rem' }}>Parking Convenience</strong>
                  <span style={{ fontSize: '0.86rem', color: 'var(--color-cream-muted)' }}>
                    {restaurantInfo.valetParking}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Phone size={20} color="var(--color-gold-candle)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ color: '#FFF', display: 'block', fontSize: '0.94rem' }}>Concierge Desk</strong>
                  <a href={`tel:${restaurantInfo.phone}`} style={{ fontSize: '0.86rem', color: 'var(--color-gold-light)', fontWeight: 600 }}>
                    {restaurantInfo.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '50px',
                background: 'rgba(37, 211, 102, 0.15)',
                border: '1px solid #25D366',
                color: '#4ADE80',
                fontWeight: 700,
                fontSize: '0.86rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
              }}
            >
              <MessageCircle size={18} />
              <span>Get Directions & Instant Confirmation on WhatsApp</span>
            </button>
          </div>

          {/* Guest Reviews Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {guestReviews.map((rev) => (
              <div key={rev.id} className="dining-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#E5B869" color="#E5B869" />
                    ))}
                  </div>

                  <span style={{ fontSize: '0.7rem', color: 'var(--color-gold-candle)', background: 'rgba(229, 184, 105, 0.1)', border: '1px solid var(--color-gold-border)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    <ShieldCheck size={11} style={{ display: 'inline', marginRight: '3px' }} />
                    Demo Review
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-cream)', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1rem' }}>
                  "{rev.comment}"
                </p>

                <div style={{ borderTop: '1px solid rgba(229, 184, 105, 0.15)', paddingTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#FFF' }}>
                    {rev.name}
                  </span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)' }}>
                    {rev.occasion}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
