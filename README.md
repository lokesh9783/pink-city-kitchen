# 🍽️ The Pink City Kitchen — Fine Dining & Royal North Indian Restaurant

> A luxury restaurant and culinary destination web application inspired by premier Jaipur fine-dining establishments such as Sirka Jaipur. Built as an original, fully responsive personal portfolio showcase by **Lokesh Kumawat**.

---

## ✨ Features & Functionality

- **Luxury Fine Dining Visual Identity**:
  - Warm onyx charcoal, candlelight gold accents, and spicy crimson tones evocative of royal dining in Rajasthan.
  - Elegant serif typography (Playfair Display, Cinzel) with responsive layouts.
- **Royal Culinary Heritage Menu**:
  - *Royal Starters & Kebabs*: Angare Paneer Tikka, Dahi Ke Shahi Kebab, Tandoori Malai Broccoli, Bhatinda Murgh Tikka, Shahi Galouti Kebab.
  - *Rajasthani Heritage Mains*: Authentic Dal Baati Churma Thali, Jodhpuri Gatte Ki Kadhi, Rajasthani Ker Sangri, Royal Rajputana Laal Maas.
  - *North Indian & Tandoor Curries*: 18-Hour Slow Cooked Dal Makhani, Asli Butter Chicken Old Delhi Style, Paneer Khurchan, Lehsuni Palak Paneer.
  - *Dum Biryanis & Tandoori Breads*: Awadhi Subz Biryani, Murgh Handi Dum Biryani, Amritsari Chur Chur Naan, Garlic Butter Naan.
  - *Desserts & Refreshers*: Kesar Phirni in Clay Kasora, Hot Moong Dal Halwa, Pink City Gulab Sharbat.
- **Interactive Dietary Filtering**:
  - Filter by category or toggle directly between **All Dishes**, **Pure Vegetarian Only**, and **Non-Veg Specialties**.
- **Chef's Signature Showcase**:
  - Dedicated spotlight for Dal Baati Churma, Dal Makhani, Shahi Paneer Jaipur Wala, and Murgh Dum Biryani with spice indicators and chef's tasting notes.
- **Interactive Table Reservation System**:
  - Configurable Guest Count (1 to 15+ guests), Date, and Dining Slot (Lunch & Dinner).
  - Ambience preference selector: *Open Courtyard under Stars*, *Royal Jharokha Main Dining Hall*, *Private Shahi Lounge*.
  - Occasion selector: Anniversary, Birthday, Family Dinner, Corporate Dining.
  - Full frontend validation.
  - Generates custom reservation code (`PCK-XXXXXX`) stored in `localStorage` (`pink_city_reservations`).
- **One-Click WhatsApp Table Confirmation**:
  - Automatically formats guest details, date, time slot, seating area, occasion, and special requests into a ready-to-send WhatsApp booking request.
- **Atmosphere & Courtyard Photo Gallery**:
  - High-definition gallery showcasing the open courtyard, tandoor bhattis, and private dining rooms with modal Lightbox preview.
- **Operating Hours & Location**:
  - C-Scheme location highlights, dual service slots (Lunch 12:00–4:00 PM, Dinner 7:00–11:30 PM), valet parking info, and verified demo reviews.

---

## 🛠️ Technology Stack

- **Frontend**: React 19 + Vite 8
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with modern custom variables, flexbox, grid, and glassmorphic touches
- **State & Storage**: React State + `localStorage`
- **Typography**: Playfair Display, Cinzel, Plus Jakarta Sans

---

## 🚀 Local Development Setup

To run this application locally:

```bash
# 1. Navigate to project directory
cd projects/pink-city-kitchen

# 2. Install dependencies (if independent)
npm install

# 3. Start local development server
npm run dev
```

The application will run at `http://localhost:5176/`.

---

## 📦 Production Build & Testing

```bash
npm run build
```

Generates optimized, production-ready static assets in the `dist/` directory.

---

## 🌐 Deploy to Netlify / Vercel

### Repository Name: `pink-city-kitchen`

#### Option A: Netlify
1. Create a new GitHub repository named `pink-city-kitchen` and push this directory.
2. In Netlify, click **Add new site** > **Import an existing project**.
3. Select `pink-city-kitchen`.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy**.

#### Option B: Vercel
1. In Vercel dashboard, import repository `pink-city-kitchen`.
2. Framework Preset: **Vite**.
3. Click **Deploy**.

---

## ⚖️ Portfolio & Demo Disclaimer

*This project is an original creative work built strictly for educational and personal portfolio demonstration purposes. All business identities, sample pricing, reviews, and contact addresses are fictional. Inspired by modern Indian restaurant websites.*

