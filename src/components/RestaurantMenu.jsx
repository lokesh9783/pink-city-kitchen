import React, { useState, useMemo } from 'react';
import { Utensils, Flame } from 'lucide-react';
import { menuCategories, fullMenu } from '../data/restaurantData';

export const RestaurantMenu = ({ onSelectMenuItem }) => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'

  const filteredDishes = useMemo(() => {
    return fullMenu.filter((dish) => {
      const matchCat = selectedCat === 'all' || dish.category === selectedCat;
      const matchDiet =
        dietFilter === 'all' ||
        (dietFilter === 'veg' && dish.type === 'veg') ||
        (dietFilter === 'non-veg' && dish.type === 'non-veg');
      return matchCat && matchDiet;
    });
  }, [selectedCat, dietFilter]);

  return (
    <section id="menu" className="section-wrapper" style={{ background: '#121013' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Utensils size={14} color="var(--color-gold-candle)" />
            A La Carte Dining
          </span>
          <h2 className="section-title">The Royal Dining Menu</h2>
          <p className="section-subtitle">
            From smoky clay tandoor kebabs to velvety handi curries and crisp tandoori breads, explore our complete culinary offerings.
          </p>
        </div>

        {/* Dietary Filters & Category Navigation Bar */}
        <div style={{ marginBottom: '3rem' }}>
          {/* Dietary Toggle */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setDietFilter('all')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '50px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: dietFilter === 'all' ? '1px solid var(--color-gold-candle)' : '1px solid rgba(229, 184, 105, 0.2)',
                background: dietFilter === 'all' ? 'rgba(229, 184, 105, 0.2)' : 'rgba(28, 24, 30, 0.6)',
                color: dietFilter === 'all' ? '#FFF' : 'var(--color-cream-muted)',
              }}
            >
              All Offerings ({fullMenu.length})
            </button>

            <button
              onClick={() => setDietFilter('veg')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '50px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: dietFilter === 'veg' ? '1px solid #2B8A3E' : '1px solid rgba(229, 184, 105, 0.2)',
                background: dietFilter === 'veg' ? 'rgba(43, 138, 62, 0.25)' : 'rgba(28, 24, 30, 0.6)',
                color: dietFilter === 'veg' ? '#4ADE80' : 'var(--color-cream-muted)',
              }}
            >
              <span className="veg-indicator" /> Vegetarian Only
            </button>

            <button
              onClick={() => setDietFilter('non-veg')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '50px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: dietFilter === 'non-veg' ? '1px solid #C92A2A' : '1px solid rgba(229, 184, 105, 0.2)',
                background: dietFilter === 'non-veg' ? 'rgba(201, 42, 42, 0.25)' : 'rgba(28, 24, 30, 0.6)',
                color: dietFilter === 'non-veg' ? '#F87171' : 'var(--color-cream-muted)',
              }}
            >
              <span className="non-veg-indicator" /> Non-Veg Special
            </button>
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
            }}
          >
            {menuCategories.map((cat) => {
              const isSelected = selectedCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  style={{
                    padding: '0.65rem 1.35rem',
                    borderRadius: '50px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    background: isSelected ? 'linear-gradient(135deg, #E5B869, #B88B35)' : 'rgba(28, 24, 30, 0.8)',
                    color: isSelected ? '#121013' : 'var(--color-cream)',
                    border: isSelected ? '1px solid #FFE099' : '1px solid var(--color-gold-border)',
                    boxShadow: isSelected ? '0 4px 14px rgba(229, 184, 105, 0.3)' : 'none',
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="dining-card"
              style={{
                display: 'flex',
                gap: '1.25rem',
                padding: '1.25rem',
                alignItems: 'center',
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  width: '95px',
                  height: '95px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <span className={dish.type === 'veg' ? "veg-indicator" : "non-veg-indicator"} />
                    {dish.spicy && (
                      <span style={{ fontSize: '0.7rem', color: '#D9381E', display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
                        <Flame size={11} /> Spicy
                      </span>
                    )}
                  </div>

                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-gold-candle)' }}>
                    ₹{dish.price}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.08rem', color: 'var(--color-cream)', marginBottom: '0.35rem' }}>
                  {dish.name}
                </h4>

                <p style={{ fontSize: '0.8rem', color: 'var(--color-cream-muted)', lineHeight: '1.45', marginBottom: '0.75rem' }}>
                  {dish.desc}
                </p>

                <button
                  onClick={() => onSelectMenuItem(dish.name)}
                  style={{
                    fontSize: '0.76rem',
                    color: 'var(--color-gold-candle)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#FFF')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-gold-candle)')}
                >
                  <span>Select for Table Booking</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
