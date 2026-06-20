import { destinationCountries } from './destinationsData'

const cityAttractions = {
  dubai: [
    { name: 'Burj Khalifa', note: 'Iconic skyline views and premium city experiences.' },
    { name: 'Desert Safari', note: 'Dune drives, sunset moments, and Arabian-style hospitality.' },
    { name: 'Dubai Marina', note: 'Waterfront dining, cruises, and evening city energy.' },
  ],
  'abu-dhabi': [
    { name: 'Sheikh Zayed Grand Mosque', note: 'A landmark of architecture, culture, and calm.' },
    { name: 'Yas Island', note: 'Theme parks, entertainment, shopping, and family-friendly days.' },
  ],
  bangkok: [
    { name: 'Grand Palace', note: 'A must-see royal landmark for first-time Thailand travelers.' },
    { name: 'Chao Phraya River', note: 'River cruises, temples, and atmospheric city views.' },
  ],
  phuket: [
    { name: 'Phi Phi Islands', note: 'Clear water, cliffs, and classic island-hopping routes.' },
    { name: 'Patong Beach', note: 'Beach time, nightlife, shopping, and easy resort access.' },
  ],
  samarkand: [
    { name: 'Registan Square', note: 'Uzbekistan’s most memorable Silk Road landmark.' },
    { name: 'Shah-i-Zinda', note: 'A beautiful avenue of tilework and historic mausoleums.' },
  ],
  tashkent: [
    { name: 'Chorsu Bazaar', note: 'Local food, market culture, and everyday Uzbek life.' },
    { name: 'Hazrat Imam Complex', note: 'A calm heritage stop with important Islamic history.' },
  ],
  tbilisi: [
    { name: 'Old Tbilisi', note: 'Balconies, sulphur baths, cafes, and winding historic lanes.' },
    { name: 'Narikala Fortress', note: 'Panoramic city views above the old town.' },
  ],
  kazbegi: [
    { name: 'Gergeti Trinity Church', note: 'A dramatic mountain setting and Georgia’s signature viewpoint.' },
    { name: 'Caucasus Mountains', note: 'Scenic drives, fresh air, and alpine landscapes.' },
  ],
}

export const findCityBySlug = (countrySlug, citySlug) => {
  const country = destinationCountries.find((item) => item.slug === countrySlug)

  if (!country) {
    return null
  }

  const city = country.cities.find((item) => item.slug === citySlug)

  if (!city) {
    return null
  }

  return { country, city }
}

export const getCityDetails = (citySlug, cityName, countryName) => {
  const attractions = cityAttractions[citySlug] || []

  return {
    intro: `${cityName} is one of ${countryName}'s standout travel experiences, shaped for guests who want comfort, clarity, and memorable local moments.`,
    highlights: [
      'Custom itinerary planning',
      'Hotel and transfer assistance',
      'Guided sightseeing options',
      'Visa and document guidance where applicable',
    ],
    attractions,
    gallery: [],
  }
}
