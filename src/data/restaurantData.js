export const restaurantInfo = {
  name: "The Pink City Kitchen",
  tagline: "Royal Rajputana Flavours & North Indian Fine Dining",
  subtitle: "A celebration of 300 years of royal Rajasthani culinary heritage, slow tandoor mastery, and candlelit courtyard hospitality in C-Scheme, Jaipur.",
  phone: "+91 141 238 9044",
  displayPhone: "+91 141 238 9044",
  whatsappNumber: "919414082190",
  email: "reservations@pinkcitykitchen.in",
  address: "Heritage Lane, Opposite Central Park, C-Scheme, Jaipur, Rajasthan 302001",
  lunchHours: "12:00 PM – 4:00 PM",
  dinnerHours: "7:00 PM – 11:30 PM",
  operatingDays: "Open All 7 Days",
  valetParking: "Complimentary Valet Parking Available",
  cuisines: "Royal Rajasthani • North Indian • Mughlai Tandoor",
  seatingOptions: ["Open Courtyard under Stars", "Royal Jharokha Dining Hall", "Private Royal Shahi Lounge"],
  rating: "4.92",
  reviewsCount: "2,840+",
  established: "2016"
};

export const menuCategories = [
  { id: "all", name: "Full Royal Menu" },
  { id: "starters", name: "Kebabs & Tandoor" },
  { id: "rajasthani", name: "Rajasthani Heritage" },
  { id: "north-indian", name: "North Indian Curries" },
  { id: "biryani-breads", name: "Biryanis & Naan" },
  { id: "desserts-drinks", name: "Desserts & Refreshers" },
];

export const signatureDishes = [
  {
    id: "sig-1",
    name: "Royal Dal Baati Churma Thali",
    category: "rajasthani",
    badge: "Pride of Rajasthan",
    isVeg: true,
    spiceLevel: "Medium",
    price: 580,
    desc: "Crispy ghee-dipped baatis accompanied by five-lentil Panchmel dal, sweet crushed churma, gatte ki sabzi, lehsun chutney, and buttermilk.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    chefNote: "Served traditionally with warm desi ghee poured at your table."
  },
  {
    id: "sig-2",
    name: "Dal Makhani (The Sirka Special)",
    category: "north-indian",
    badge: "Simmered 18 Hours",
    isVeg: true,
    spiceLevel: "Mild",
    price: 440,
    desc: "Black urad lentils and rajma slow-simmered over live charcoal embers through the night with ripe tomatoes, white butter, and fresh cream.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    chefNote: "Our 18-hour slow-cooked signature recipe since day one."
  },
  {
    id: "sig-3",
    name: "Shahi Paneer Jaipur Wala",
    category: "north-indian",
    badge: "Chef Signature",
    isVeg: true,
    spiceLevel: "Medium",
    price: 460,
    desc: "Fresh cottage cheese triangles simmered in a velvety gravy of roasted cashews, charred tomatoes, dried fenugreek, and fragrant saffron.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    chefNote: "Balanced with a gentle touch of cardamom and local honey."
  },
  {
    id: "sig-4",
    name: "Murgh Dum Biryani (Royal Handi)",
    category: "biryani-breads",
    badge: "Slow Dum Cooked",
    isVeg: false,
    spiceLevel: "Spicy",
    price: 520,
    desc: "Long-grain aged basmati rice layered with tender marinated chicken, saffron milk, fried brown onions, and fresh mint, sealed in earthen handi.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    chefNote: "Unsealed hot at your table with burani raita and salan."
  }
];

export const fullMenu = [
  // Starters
  {
    id: "m-1",
    name: "Angare Paneer Tikka",
    category: "starters",
    type: "veg",
    price: 390,
    spicy: true,
    desc: "Fresh cottage cheese cubes marinated in Kashmiri chili, crushed yellow mustard, and hung curd, roasted in intense clay tandoor.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-2",
    name: "Dahi Ke Shahi Kebab",
    category: "starters",
    type: "veg",
    price: 380,
    spicy: false,
    desc: "Velvety spiced hung yoghurt patties stuffed with finely chopped bell peppers and mint, shallow fried to a crisp golden crunch.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-3",
    name: "Tandoori Malai Broccoli",
    category: "starters",
    type: "veg",
    price: 410,
    spicy: false,
    desc: "Tender broccoli florets steeped in cream cheese, cardamom, and toasted cashews, char-grilled with mild spices.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-4",
    name: "Bhatinda Murgh Malai Tikka",
    category: "starters",
    type: "non-veg",
    price: 470,
    spicy: false,
    desc: "Boneless chicken morsels steeped in malai, cheddar cheese, white pepper, and roasted garlic, finished over glowing charcoal.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-5",
    name: "Shahi Galouti Kebab",
    category: "starters",
    type: "non-veg",
    price: 520,
    spicy: true,
    desc: "Melt-in-mouth smoked lamb patties infused with 24 royal spices and rose water, served over miniature saffron parathas.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
  },

  // Rajasthani Heritage
  {
    id: "m-6",
    name: "Jodhpuri Gatte Ki Kadhi",
    category: "rajasthani",
    type: "veg",
    price: 380,
    spicy: true,
    desc: "Soft steamed gram-flour dumplings simmered in a spiced sour curd gravy tempered with fenugreek and mustard seeds.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-7",
    name: "Rajasthani Ker Sangri",
    category: "rajasthani",
    type: "veg",
    price: 480,
    spicy: true,
    desc: "Authentic Thar Desert dried caper berries (ker) and wild desert beans (sangri) sautéed with whole red chilies, amchur, and raisins.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-8",
    name: "Royal Rajputana Laal Maas",
    category: "rajasthani",
    type: "non-veg",
    price: 620,
    spicy: true,
    desc: "Legendary royal game curry cooked with tender mutton cuts in a fiery gravy of Mathania red chilies, garlic, and pure desi ghee.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-9",
    name: "Govind Gatta Curry",
    category: "rajasthani",
    type: "veg",
    price: 420,
    spicy: false,
    desc: "Grand festive gattas stuffed with mawa and chopped nuts, simmered in a rich tomato, cashew, and saffron gravy.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
  },

  // North Indian Curries
  {
    id: "m-10",
    name: "Asli Butter Chicken (Old Delhi Style)",
    category: "north-indian",
    type: "non-veg",
    price: 520,
    spicy: false,
    desc: "Tandoori chicken pieces tossed in a silky gravy of sun-ripened tomatoes, dairy butter, fresh cream, and honey-kissed kasuri methi.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-11",
    name: "Paneer Khurchan Tawa Masala",
    category: "north-indian",
    type: "veg",
    price: 430,
    spicy: true,
    desc: "Paneer batons scraped on a smoking iron tawa with bell peppers, sweet caramelized onions, and freshly crushed coriander seeds.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-12",
    name: "Lehsuni Palak Paneer",
    category: "north-indian",
    type: "veg",
    price: 410,
    spicy: false,
    desc: "Velvety puréed spinach tempered with browned garlic slivers and mild cumin, folded with soft dairy cottage cheese.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-13",
    name: "Yellow Dal Tadka Double Chaunk",
    category: "north-indian",
    type: "veg",
    price: 320,
    spicy: true,
    desc: "Arhar dal boiled with turmeric and rock salt, finished with a double sizzle of desi ghee, whole dry red chilies, and asafoetida.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
  },

  // Biryanis & Tandoori Breads
  {
    id: "m-14",
    name: "Awadhi Subz Dum Biryani",
    category: "biryani-breads",
    type: "veg",
    price: 430,
    spicy: false,
    desc: "Fragrant basmati rice cooked with seasonal garden veggies, saffron, kewra water, and caramelised onions in a dough-sealed clay pot.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-15",
    name: "Amritsari Chur Chur Naan",
    category: "biryani-breads",
    type: "veg",
    price: 160,
    spicy: false,
    desc: "Layered, flaky tandoori bread stuffed with spiced potatoes and paneer, hand-crushed and drenched in desi ghee.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-16",
    name: "Garlic Butter Naan",
    category: "biryani-breads",
    type: "veg",
    price: 110,
    spicy: false,
    desc: "Leavened refined flour bread topped with minced charred garlic and fresh coriander, brushed with clarified butter.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
  },

  // Desserts & Drinks
  {
    id: "m-17",
    name: "Kesar Phirni in Clay Kasora",
    category: "desserts-drinks",
    type: "veg",
    price: 210,
    spicy: false,
    desc: "Slow-cooked ground rice pudding flavored with saffron, cardamom, and rose water, chilled in unglazed terracotta bowls.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-18",
    name: "Hot Moong Dal Halwa",
    category: "desserts-drinks",
    type: "veg",
    price: 240,
    spicy: false,
    desc: "Coarsely ground yellow lentils roasted patiently in pure cow ghee for 3 hours, blended with mawa, cardamom, and almond slivers.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m-19",
    name: "Pink City Gulab Sharbat",
    category: "desserts-drinks",
    type: "veg",
    price: 160,
    spicy: false,
    desc: "Refreshing cooler made with indigenous Chaitri rose petals, basil seeds (sabja), lemon zest, and crushed ice.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"
  }
];

export const restaurantGallery = [
  {
    id: "g-1",
    title: "Open-Air Candlelit Courtyard",
    category: "Courtyard Dining",
    desc: "Dine under Jaipur night skies surrounded by heritage carved stone arches and gentle water fountains.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g-2",
    title: "Royal Jharokha Main Dining Hall",
    category: "Main Dining",
    desc: "Regal velvet booths, antique brass chandeliers, and traditional Rajasthani fresco motifs.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g-3",
    title: "The Live Clay Tandoor Bhatti",
    category: "Kitchen & Craft",
    desc: "Witness our tandoori masters preparing smoking kebabs and freshly slapped naans over burning coal.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g-4",
    title: "Shahi Private Dining Lounge",
    category: "Private Lounge",
    desc: "An exclusive dining chamber for family milestones, intimate celebrations, and corporate dinners.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  }
];

export const guestReviews = [
  {
    id: "r-1",
    name: "Vikramaditya & Radhika Roy",
    occasion: "Family Anniversary Dinner",
    comment: "The Dal Baati Churma and Dal Makhani were spectacular! The ambiance in the courtyard with candle lanterns was magical. Truly the finest dining experience in C-Scheme.",
    rating: 5,
    date: "February 2026",
    badge: "Verified Demo Review (Portfolio Showcase)"
  },
  {
    id: "r-2",
    name: "Amanpreet Kaur",
    occasion: "Friends Gathering",
    comment: "The Angare Paneer Tikka and Murgh Dum Biryani arrived steaming hot with intoxicating aroma. Flawless hospitality by the staff.",
    rating: 5,
    date: "January 2026",
    badge: "Verified Demo Review (Portfolio Showcase)"
  },
  {
    id: "r-3",
    name: "Dr. Siddharth Mathur",
    occasion: "Business Dinner",
    comment: "Reserved the private Shahi lounge for 12 guests. The customized service and hot Moong Dal Halwa won everyone over. Highly recommended!",
    rating: 5,
    date: "December 2025",
    badge: "Verified Demo Review (Portfolio Showcase)"
  }
];

