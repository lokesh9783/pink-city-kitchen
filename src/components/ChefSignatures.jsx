import React from 'react';
import { Utensils, Flame, Award } from 'lucide-react';
import { signatureDishes } from '../data/restaurantData';

export const ChefSignatures = ({ onBookForDish }) => {
  return (
    <section id="signatures" className="section-wrapper" style={{ background: '#171419' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Award size={14} color="var(--color-gold-candle)" />
            Master Chef's Selection
          </span>
          <h2 className="section-title">Signature Rajputana Creations</h2>
          <p className="section-subtitle">
            Our most celebrated heritage recipes, slow-cooked with heirloom spices and served in traditional brass and earthenware.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {signatureDishes.map((dish) => (
            <div key={dish.id} className="dining-card" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Image with Tag */}
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'var(--color-crimson)',
                    color: '#FFF',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {dish.badge}
                </span>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                    background: 'rgba(18, 16, 19, 0.85)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: 'var(--color-gold-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <Flame size={12} color="#D9381E" />
                  <span>Spice: {dish.spiceLevel}</span>
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.45rem' }}>
                    <span className={dish.isVeg ? "veg-indicator" : "non-veg-indicator"} />
                    <span style={{ fontSize: '0.76rem', color: dish.isVeg ? '#4ADE80' : '#F87171', fontWeight: 600 }}>
                      {dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-cream)', marginBottom: '0.5rem' }}>
                    {dish.name}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--color-cream-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {dish.desc}
                  </p>

                  <div
                    style={{
                      padding: '0.75rem',
                      background: 'rgba(229, 184, 105, 0.08)',
                      borderRadius: '8px',
                      borderLeft: '2px solid var(--color-gold-candle)',
                      fontSize: '0.8rem',
                      color: 'var(--color-gold-light)',
                      fontStyle: 'italic',
                      marginBottom: '1.5rem',
                    }}
                  >
                    "{dish.chefNote}"
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(229, 184, 105, 0.15)', paddingTop: '1rem' }}>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-gold-candle)' }}>
                    ₹{dish.price}
                  </div>

                  <button
                    onClick={() => onBookForDish(dish.name)}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--color-gold-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#FFF')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--color-gold-light)')}
                  >
                    <span>Reserve To Taste</span>
                    <Utensils size={14} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
