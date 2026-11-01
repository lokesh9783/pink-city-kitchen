import React from 'react';
import { Sparkles, Calendar, Clock, MapPin, Flame, Utensils, Star } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const Hero = ({ onReserveClick }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1rem 6rem 1rem',
        overflow: 'hidden',
        background: `
          linear-gradient(180deg, rgba(18, 16, 19, 0.8) 0%, rgba(18, 16, 19, 0.94) 85%, #121013 100%),
          url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat
        `,
      }}
    >
      {/* Amber Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(229, 184, 105, 0.15) 0%, rgba(217, 56, 30, 0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        {/* Pill Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
          <span className="section-tag">
            <Flame size={14} color="var(--color-gold-candle)" />
            Authentic Fine Dining in C-Scheme, Jaipur
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            color: 'var(--color-cream)',
            textShadow: '0 8px 30px rgba(0,0,0,0.8)',
          }}
        >
          Royal Rajputana Flavours &
          <br />
          <span
            style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #FFF3D6 0%, #E5B869 60%, #B88B35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Slow Tandoor Mastery
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            color: 'var(--color-cream-muted)',
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.65',
            fontFamily: 'var(--font-serif)',
          }}
        >
          Immerse your senses in 300-year-old royal recipes, 18-hour slow-simmered black lentils,
          and fragrant earthen dum biryanis served in a candlelit Rajasthani courtyard.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '3.75rem',
          }}
        >
          <button onClick={onReserveClick} className="btn-gold">
            <Calendar size={18} />
            <span>Reserve A Table</span>
          </button>

          <a href="#menu" className="btn-outline-gold">
            <Utensils size={18} />
            <span>Explore Royal Menu</span>
          </a>
        </div>

        {/* 4 Pillars Summary Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1020px',
            margin: '0 auto',
            padding: '1.75rem 2rem',
            borderRadius: '20px',
            background: 'rgba(28, 24, 30, 0.88)',
            border: '1px solid var(--color-gold-border)',
            backdropFilter: 'blur(16px)',
            boxShadow: 'var(--shadow-warm)',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-candle)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.2rem' }}>
              <Clock size={14} /> Lunch & Dinner
            </div>
            <div style={{ color: 'var(--color-cream)', fontSize: '0.94rem', fontWeight: 600 }}>
              {restaurantInfo.lunchHours} • {restaurantInfo.dinnerHours}
            </div>
          </div>

          <div style={{ textAlign: 'left', borderLeft: '1px solid rgba(229, 184, 105, 0.15)', paddingLeft: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-candle)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.2rem' }}>
              <MapPin size={14} /> Prime Location
            </div>
            <div style={{ color: 'var(--color-cream)', fontSize: '0.94rem', fontWeight: 600 }}>
              C-Scheme, Near Central Park, Jaipur
            </div>
          </div>

          <div style={{ textAlign: 'left', borderLeft: '1px solid rgba(229, 184, 105, 0.15)', paddingLeft: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-candle)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.2rem' }}>
              <Sparkles size={14} /> Dining Ambiance
            </div>
            <div style={{ color: 'var(--color-cream)', fontSize: '0.94rem', fontWeight: 600 }}>
              Open Courtyard & Royal Jharokha
            </div>
          </div>

          <div style={{ textAlign: 'left', borderLeft: '1px solid rgba(229, 184, 105, 0.15)', paddingLeft: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-candle)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.2rem' }}>
              <Star size={14} fill="#E5B869" color="#E5B869" /> Top Rated
            </div>
            <div style={{ color: 'var(--color-cream)', fontSize: '0.94rem', fontWeight: 600 }}>
              {restaurantInfo.rating} ★ (2,800+ Guest Reviews)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
