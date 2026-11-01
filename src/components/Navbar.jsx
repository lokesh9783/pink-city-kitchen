import React, { useState, useEffect } from 'react';
import { Utensils, Calendar, MessageCircle, Menu, X } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const Navbar = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello The Pink City Kitchen! I would like to enquire about table availability for tonight in C-Scheme.`
    );
    window.open(`https://wa.me/${restaurantInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  const navLinks = [
    { name: 'Royal Menu', href: '#menu' },
    { name: 'Chef Signatures', href: '#signatures' },
    { name: 'Table Reservation', href: '#reservation' },
    { name: 'Ambiance Gallery', href: '#ambiance' },
    { name: 'Hours & Location', href: '#location' },
  ];

  return (
    <>
      {/* Top Demo Ribbon */}
      <div className="demo-top-ribbon">
        <span className="badge">Portfolio Demo</span>
        <span>Original Concept Inspired by Jaipur Fine Dining Restaurants • Fictional Business Demo</span>
      </div>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transition: 'var(--transition)',
          background: isScrolled ? 'rgba(18, 16, 19, 0.95)' : 'rgba(18, 16, 19, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-gold-border)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #E5B869, #A67C2E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#121013',
                boxShadow: '0 4px 15px rgba(229, 184, 105, 0.3)',
              }}
            >
              <Utensils size={22} strokeWidth={2.2} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-royal)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: 'var(--color-cream)',
                  display: 'block',
                  lineHeight: 1.1,
                }}
              >
                THE PINK CITY KITCHEN
              </span>
              <span
                style={{
                  fontSize: '0.74rem',
                  letterSpacing: '0.18em',
                  color: 'var(--color-gold-candle)',
                  textTransform: 'uppercase',
                  display: 'block',
                }}
              >
                Fine Dining • C-Scheme, Jaipur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', gap: '1.75rem', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--color-cream-muted)',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--color-gold-candle)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--color-cream-muted)')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-actions">
            <button
              onClick={handleWhatsApp}
              style={{
                padding: '0.6rem 1rem',
                borderRadius: '50px',
                background: 'rgba(37, 211, 102, 0.12)',
                color: '#4ADE80',
                border: '1px solid rgba(37, 211, 102, 0.4)',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                cursor: 'pointer',
              }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={onOpenReservation}
              className="btn-gold"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}
            >
              <Calendar size={15} />
              <span>Book A Table</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid var(--color-gold-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold-candle)',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#1A171D',
              borderTop: '1px solid var(--color-gold-border)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  color: 'var(--color-cream)',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(229, 184, 105, 0.1)',
                }}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="btn-gold"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              <Calendar size={16} /> Reserve A Table
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
