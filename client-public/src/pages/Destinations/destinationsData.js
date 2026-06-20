/**
 * Central data source for the Destinations page.
 *
 * Structure: each country owns a `heroImage` (used for the left-side
 * feature panel) and a `cities` array (used for the right-side grid).
 * Every city carries its own `image` + `slug` — no index-based matching
 * between separate arrays, which was the exact bug pattern fixed in
 * TravelGallery.jsx (silent undefined.src crashes when arrays drift
 * out of sync). Keep that pattern here: add/remove a city by editing
 * one object, nothing else needs to stay in sync.
 *
 * TODO: every `image.src` below is a placeholder Unsplash URL reused
 * from elsewhere in the codebase (FeaturedPackagesSection.jsx,
 * PopularDestinationsSection.jsx, TravelGallery.jsx) so nothing is
 * broken on first render. Replace with destination-accurate photos
 * before shipping — see the city's `image.alt` for what to search.
 */

export const destinationCountries = [
  {
    slug: 'dubai-uae',
    name: 'Dubai / UAE',
    tagline: 'Modern skylines, desert escapes, and coastal calm.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
      alt: 'Dubai skyline at night',
    },
    travelTips: {
      bestTime: 'November to March',
      currency: 'UAE Dirham (AED)',
      language: 'Arabic, English widely spoken',
      timezone: 'GST (UTC+4)',
    },
    cities: [
      { slug: 'dubai', name: 'Dubai', image: { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', alt: 'Dubai skyline with Burj Khalifa' } },
      { slug: 'abu-dhabi', name: 'Abu Dhabi', image: { src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80', alt: 'Abu Dhabi waterfront at sunset' } },
      { slug: 'sharjah', name: 'Sharjah', image: { src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80', alt: 'Sharjah heritage architecture' } },
      { slug: 'ajman', name: 'Ajman', image: { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', alt: 'Ajman coastline' } },
      { slug: 'ras-al-khaimah', name: 'Ras Al Khaimah', image: { src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80', alt: 'Ras Al Khaimah mountains and coast' } },
      { slug: 'fujairah', name: 'Fujairah', image: { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', alt: 'Fujairah Hajar mountains' } },
      { slug: 'hatta', name: 'Hatta', image: { src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80', alt: 'Hatta mountain reservoir' } },
      { slug: 'al-ain', name: 'Al Ain', image: { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', alt: 'Al Ain oasis and forts' } },
    ],
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    tagline: 'Temples, beaches, mountains, and night markets.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80',
      alt: 'Traditional Thai temple at sunrise',
    },
    travelTips: {
      bestTime: 'November to February',
      currency: 'Thai Baht (THB)',
      language: 'Thai, English in tourist areas',
      timezone: 'ICT (UTC+7)',
    },
    cities: [
      { slug: 'bangkok', name: 'Bangkok', image: { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80', alt: 'Bangkok temple skyline' } },
      { slug: 'pattaya', name: 'Pattaya', image: { src: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=600&q=80', alt: 'Pattaya beachfront' } },
      { slug: 'phuket', name: 'Phuket', image: { src: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=600&q=80', alt: 'Phuket turquoise bay with cliffs' } },
      { slug: 'krabi', name: 'Krabi', image: { src: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=600&q=80', alt: 'Krabi limestone cliffs' } },
      { slug: 'chiang-mai', name: 'Chiang Mai', image: { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80', alt: 'Chiang Mai mountain temple' } },
      { slug: 'koh-samui', name: 'Koh Samui', image: { src: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=600&q=80', alt: 'Koh Samui island beach' } },
      { slug: 'chiang-rai', name: 'Chiang Rai', image: { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80', alt: 'Chiang Rai white temple' } },
      { slug: 'hua-hin', name: 'Hua Hin', image: { src: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=600&q=80', alt: 'Hua Hin coastal town' } },
      { slug: 'ayutthaya', name: 'Ayutthaya', image: { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80', alt: 'Ayutthaya ancient ruins' } },
    ],
  },
  {
    slug: 'uzbekistan',
    name: 'Uzbekistan',
    tagline: 'Silk Road heritage, tilework, and old bazaars.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
      alt: 'Registan Square at dusk, Samarkand',
    },
    travelTips: {
      bestTime: 'March to May, September to November',
      currency: 'Uzbekistani Som (UZS)',
      language: 'Uzbek, Russian widely understood',
      timezone: 'UZT (UTC+5)',
    },
    cities: [
      { slug: 'tashkent', name: 'Tashkent', image: { src: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=600&q=80', alt: 'Tashkent historic architecture' } },
      { slug: 'samarkand', name: 'Samarkand', image: { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80', alt: 'Registan Square, Samarkand' } },
      { slug: 'bukhara', name: 'Bukhara', image: { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80', alt: 'Bukhara old town' } },
      { slug: 'khiva', name: 'Khiva', image: { src: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=600&q=80', alt: 'Khiva ancient city walls' } },
      { slug: 'fergana', name: 'Fergana', image: { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80', alt: 'Fergana valley' } },
      { slug: 'andijan', name: 'Andijan', image: { src: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=600&q=80', alt: 'Andijan city architecture' } },
      { slug: 'namangan', name: 'Namangan', image: { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80', alt: 'Namangan mosque' } },
      { slug: 'nukus', name: 'Nukus', image: { src: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=600&q=80', alt: 'Nukus museum district' } },
      { slug: 'urgench', name: 'Urgench', image: { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80', alt: 'Urgench gateway to Khorezm' } },
    ],
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    tagline: 'Mountains, wine valleys, and culture-rich towns.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80',
      alt: 'Georgian mountain village with church',
    },
    travelTips: {
      bestTime: 'May to June, September to October',
      currency: 'Georgian Lari (GEL)',
      language: 'Georgian, Russian and English in cities',
      timezone: 'GET (UTC+4)',
    },
    cities: [
      { slug: 'tbilisi', name: 'Tbilisi', image: { src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80', alt: 'Tbilisi old town' } },
      { slug: 'batumi', name: 'Batumi', image: { src: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=600&q=80', alt: 'Batumi Black Sea coastline' } },
      { slug: 'kutaisi', name: 'Kutaisi', image: { src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80', alt: 'Kutaisi cathedral' } },
      { slug: 'mtskheta', name: 'Mtskheta', image: { src: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=600&q=80', alt: 'Mtskheta ancient monastery' } },
      { slug: 'borjomi', name: 'Borjomi', image: { src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80', alt: 'Borjomi valley and gorge' } },
      { slug: 'gudauri', name: 'Gudauri', image: { src: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=600&q=80', alt: 'Gudauri mountain resort' } },
      { slug: 'kazbegi', name: 'Kazbegi / Stepantsminda', image: { src: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=600&q=80', alt: 'Gergeti Trinity Church, Kazbegi' } },
      { slug: 'sighnaghi', name: 'Sighnaghi', image: { src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80', alt: 'Sighnaghi wine town walls' } },
      { slug: 'telavi', name: 'Telavi', image: { src: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=600&q=80', alt: 'Telavi vineyards, Kakheti' } },
    ],
  },
]