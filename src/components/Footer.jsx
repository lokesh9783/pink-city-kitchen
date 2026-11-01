import React from 'react';
import { Utensils, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const Footer = () => {
  return (
    <footer style={{ background: '#0D0B0E', borderTop: '1px solid rgba(229, 184, 105, 0.2)', padding: '4.5rem 0 2rem 0' }}>
      <div className="container">
        
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E5B869, #A67C2E)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#121013',
                }}
              >
                <Utensils size={20} strokeWidth={2.2} />
              </div>
              <span style={{ fontFamily: 'var(--font-royal)', fontSize: '1.25rem', fontWeight: 800, color: '#FFF' }}>
                THE PINK CITY KITCHEN
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--color-cream-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Celebrating Rajasthan's majestic culinary heritage through slow-cooked charcoal delicacies, heritage curries, and warm Rajputana hospitality in C-Scheme, Jaipur.
            </p>

            <span style={{ fontSize: '0.76rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
              Royal Rajputana Dining • Est. {restaurantInfo.established}
            </span>
          </div>

          {/* Quick Menu Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Culinary Selections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--color-cream-muted)' }}>
              <li>Royal Dal Baati Churma Thali</li>
              <li>18-Hour Slow Cooked Dal Makhani</li>
              <li>Shahi Paneer Jaipur Wala</li>
              <li>Handi Murgh Dum Biryani</li>
              <li>Angare Paneer Tikka & Malai Broccoli</li>
              <li>Chur Chur Naan & Laccha Paratha</li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Reservations & Hours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--color-cream-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={17} color="var(--color-gold-candle)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{restaurantInfo.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={17} color="var(--color-gold-candle)" style={{ flexShrink: 0 }} />
                <a href={`tel:${restaurantInfo.phone}`} style={{ color: '#FFF', fontWeight: 600 }}>{restaurantInfo.displayPhone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={17} color="var(--color-gold-candle)" style={{ flexShrink: 0 }} />
                <span>Lunch: 12:00–4:00 PM | Dinner: 7:00–11:30 PM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={17} color="var(--color-gold-candle)" style={{ flexShrink: 0 }} />
                <span>{restaurantInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Box */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(28, 24, 30, 0.85)',
            border: '1px solid var(--color-gold-border)',
            borderRadius: '10px',
            marginBottom: '2rem',
            fontSize: '0.78rem',
            color: 'var(--color-cream-muted)',
            textAlign: 'center',
            lineHeight: '1.6',
          }}
        >
          <strong style={{ color: 'var(--color-gold-candle)', display: 'block', marginBottom: '0.2rem', textTransform: 'uppercase' }}>
            Personal Portfolio Project Showcase • Fictional Demo Business
          </strong>
          The Pink City Kitchen is an original frontend restaurant application designed and crafted by Lokesh Kumawat.
          All brand identities, menus, prices, and reviews are demonstration content inspired by premier North Indian & Rajasthani fine dining restaurants.
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            © 2026 The Pink City Kitchen. All rights reserved.
          </div>
          <div>
            Crafted with React + Vite by <strong style={{ color: 'var(--color-gold-candle)' }}>Lokesh Kumawat</strong>
          </div>
        </div>

      </div>
    </footer>
  );
};

