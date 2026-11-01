import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const ReservationForm = ({ prefilledDish = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2 Guests',
    date: '',
    timeSlot: '8:00 PM (Dinner)',
    seatingArea: 'Open Courtyard under Stars',
    occasion: 'Casual Dining',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [confirmationCode, setConfirmationCode] = useState(null);

  useEffect(() => {
    if (prefilledDish) {
      setFormData((prev) => ({
        ...prev,
        specialRequests: `Interested in trying Chef's signature: ${prefilledDish}`,
      }));
    }
  }, [prefilledDish]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Please provide a valid 10-digit mobile number.';
    if (!formData.date) errs.date = 'Please select a reservation date.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({});
    const refCode = `PCK-${Math.floor(100000 + Math.random() * 900000)}`;

    const reservationRecord = {
      refCode,
      ...formData,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('pink_city_reservations') || '[]');
      existing.unshift(reservationRecord);
      localStorage.setItem('pink_city_reservations', JSON.stringify(existing));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }

    setConfirmationCode(refCode);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `*THE PINK CITY KITCHEN — TABLE RESERVATION REQUEST*\n` +
      `------------------------------------\n` +
      `*Booking Ref:* ${confirmationCode || 'Direct Enquiry'}\n` +
      `*Guest Name:* ${formData.name}\n` +
      `*Guests:* ${formData.guests}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time Slot:* ${formData.timeSlot}\n` +
      `*Seating Preference:* ${formData.seatingArea}\n` +
      `*Occasion:* ${formData.occasion}\n` +
      `*Special Notes:* ${formData.specialRequests || 'None'}\n` +
      `*Phone:* ${formData.phone}\n` +
      `------------------------------------\n` +
      `Please confirm table reservation for our dining party in C-Scheme, Jaipur.`
    );
    window.open(`https://wa.me/${restaurantInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="reservation" className="section-wrapper" style={{ background: '#171419' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Calendar size={14} color="var(--color-gold-candle)" />
            Reserve Your Experience
          </span>
          <h2 className="section-title">Book A Royal Dining Table</h2>
          <p className="section-subtitle">
            Secure your preferred table in our starlit courtyard, royal jharokha hall, or private Shahi dining chamber.
          </p>
        </div>

        {confirmationCode ? (
          /* Confirmation Card */
          <div
            className="dining-card"
            style={{
              padding: '3.5rem 2.5rem',
              textAlign: 'center',
              border: '2px solid var(--color-gold-candle)',
              background: 'linear-gradient(180deg, #252028 0%, #171419 100%)',
            }}
          >
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'rgba(229, 184, 105, 0.15)',
                border: '2px solid var(--color-gold-candle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: 'var(--color-gold-candle)',
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <span
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-royal)',
                color: 'var(--color-gold-candle)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 700,
              }}
            >
              Table Request Logged • Reference: {confirmationCode}
            </span>

            <h3 style={{ fontSize: '2.2rem', color: '#FFF', marginTop: '0.5rem', marginBottom: '1rem' }}>
              We Look Forward To Welcoming You, {formData.name}!
            </h3>

            <p style={{ fontSize: '1rem', color: 'var(--color-cream-muted)', maxWidth: '580px', margin: '0 auto 2rem auto', lineHeight: '1.7' }}>
              Your reservation request for <strong style={{ color: '#FFF' }}>{formData.guests}</strong> on <strong style={{ color: 'var(--color-gold-candle)' }}>{formData.date} at {formData.timeSlot}</strong> ({formData.seatingArea}) has been recorded.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <button
                onClick={handleWhatsAppBooking}
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#FFF',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
                }}
              >
                <MessageCircle size={18} />
                <span>Confirm on WhatsApp Desk</span>
              </button>

              <button
                onClick={() => setConfirmationCode(null)}
                className="btn-outline-gold"
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form
            onSubmit={handleSubmit}
            className="dining-card"
            style={{
              padding: '2.75rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            {/* Row 1: Guests, Date, Slot */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.45rem' }}>
                  Number of Guests *
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#121013',
                    border: '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  {['1 Guest', '2 Guests (Couple)', '3 Guests', '4 Guests', '5 to 6 Guests', '7 to 10 Guests (Family Table)', '12+ Guests (Private Lounge)'].map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.45rem' }}>
                  Date of Visit *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#121013',
                    border: errors.date ? '1px solid #EF4444' : '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                {errors.date && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.3rem' }}>{errors.date}</p>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.45rem' }}>
                  Dining Time Slot *
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#121013',
                    border: '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  <optgroup label="Lunch (12:00 PM – 4:00 PM)">
                    <option value="12:30 PM (Lunch)">12:30 PM (Lunch)</option>
                    <option value="1:30 PM (Lunch)">1:30 PM (Lunch)</option>
                    <option value="2:30 PM (Lunch)">2:30 PM (Lunch)</option>
                  </optgroup>
                  <optgroup label="Dinner (7:00 PM – 11:30 PM)">
                    <option value="7:30 PM (Dinner)">7:30 PM (Dinner)</option>
                    <option value="8:15 PM (Dinner)">8:15 PM (Dinner)</option>
                    <option value="9:00 PM (Dinner)">9:00 PM (Dinner)</option>
                    <option value="9:45 PM (Dinner)">9:45 PM (Dinner)</option>
                    <option value="10:30 PM (Late Dinner)">10:30 PM (Late Dinner)</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Row 2: Seating Area & Occasion */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.45rem' }}>
                  Seating Ambience Preference
                </label>
                <select
                  value={formData.seatingArea}
                  onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#121013',
                    border: '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  {restaurantInfo.seatingOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.45rem' }}>
                  Dining Occasion
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#121013',
                    border: '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  {['Casual Dinner with Friends', 'Romantic Candlelight Dinner', 'Family Celebration / Birthday', 'Anniversary Dining', 'Corporate / Business Meeting'].map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Name, Phone, Email */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.45rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vikramaditya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#121013',
                    border: errors.name ? '1px solid #EF4444' : '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                {errors.name && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.3rem' }}>{errors.name}</p>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.45rem' }}>
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98290 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#121013',
                    border: errors.phone ? '1px solid #EF4444' : '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                {errors.phone && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.3rem' }}>{errors.phone}</p>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.45rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. vikram@sharma.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#121013',
                    border: '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--color-gold-candle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.45rem' }}>
                Special Dietary or Seating Notes (Optional)
              </label>
              <textarea
                rows="2"
                placeholder="Mention Jain food preferences, cake arrangement for birthday, quiet corner booth preference..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  background: '#121013',
                  border: '1px solid var(--color-gold-border)',
                  borderRadius: '8px',
                  color: '#FFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(229, 184, 105, 0.2)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                *No advance booking deposit required. Free cancellation.
              </div>

              <button type="submit" className="btn-gold">
                <Calendar size={16} />
                <span>Confirm Table Reservation</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
