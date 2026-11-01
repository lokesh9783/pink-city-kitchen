import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChefSignatures } from './components/ChefSignatures';
import { RestaurantMenu } from './components/RestaurantMenu';
import { ReservationForm } from './components/ReservationForm';
import { AmbianceGallery } from './components/AmbianceGallery';
import { TimingsLocation } from './components/TimingsLocation';
import { Footer } from './components/Footer';

export function App() {
  const [prefilledDish, setPrefilledDish] = useState(null);

  const scrollToReservation = (dishName = null) => {
    if (dishName) {
      setPrefilledDish(dishName);
    }
    const section = document.getElementById('reservation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header */}
      <Navbar onOpenReservation={() => scrollToReservation()} />

      {/* Main Flow */}
      <main style={{ flex: 1 }}>
        <Hero onReserveClick={() => scrollToReservation()} />
        
        <ChefSignatures onBookForDish={(dish) => scrollToReservation(dish)} />
        
        <RestaurantMenu onSelectMenuItem={(dish) => scrollToReservation(dish)} />
        
        <ReservationForm prefilledDish={prefilledDish} />
        
        <AmbianceGallery />
        
        <TimingsLocation />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

