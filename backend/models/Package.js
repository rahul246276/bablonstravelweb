const mongoose = require('mongoose')
const slugify = require('slugify')

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: [true, 'Image URL is required'],
      trim: true,
    },
    publicId: {
      type: String,
      required: [true, 'Image publicId is required'],
      trim: true,
    },
    alt: {
      type: String,
      trim: true,
      default: '',
    },
    type: {
      type: String,
      enum: ['hero', 'gallery', 'hotel'],
      default: 'gallery',
    },
  },
  { _id: false }
)

const departureSchema = new mongoose.Schema(
  {
    departureDate: {
      type: Date,
      required: [true, 'Departure date is required'],
    },
    returnDate: {
      type: Date,
      required: [true, 'Return date is required'],
    },
    totalSeats: {
      type: Number,
      required: [true, 'Total seats are required'],
      min: [1, 'Total seats must be at least 1'],
    },
    bookedSeats: {
      type: Number,
      default: 0,
      min: [0, 'Booked seats cannot be negative'],
    },
    availableSeats: {
      type: Number,
      min: [0, 'Available seats cannot be negative'],
    },
    status: {
      type: String,
      enum: ['open', 'filling', 'soldout', 'cancelled'],
      default: 'open',
      index: true,
    },
    price: {
      type: Number,
      min: [0, 'Departure price cannot be negative'],
    },
  },
  { timestamps: false }
)

departureSchema.pre('validate', function setAvailableSeats() {
  if (this.totalSeats !== undefined && this.bookedSeats !== undefined) {
    this.availableSeats = Math.max(this.totalSeats - this.bookedSeats, 0)
  }

  if (this.availableSeats === 0 && this.status !== 'cancelled') {
    this.status = 'soldout'
  }
})

departureSchema.path('returnDate').validate(function validateReturnDate(value) {
  return !this.departureDate || value >= this.departureDate
}, 'Return date must be on or after departure date')

departureSchema.path('bookedSeats').validate(function validateBookedSeats(value) {
  return this.totalSeats === undefined || value <= this.totalSeats
}, 'Booked seats cannot exceed total seats')

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Package title is required'],
      trim: true,
      minlength: [3, 'Package title must be at least 3 characters'],
      maxlength: [160, 'Package title cannot exceed 160 characters'],
      index: 'text',
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    country: {
      name: {
        type: String,
        required: [true, 'Country name is required'],
        trim: true,
        index: true,
      },
      code: {
        type: String,
        trim: true,
        uppercase: true,
        maxlength: [3, 'Country code cannot exceed 3 characters'],
      },
      flag: {
        type: String,
        trim: true,
        default: '',
      },
    },
    cities: [
      {
        type: String,
        trim: true,
        index: true,
      },
    ],
    packageType: {
      type: String,
      enum: ['group', 'family', 'couple', 'individual', 'custom'],
      required: [true, 'Package type is required'],
      index: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
      index: true,
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    duration: {
      nights: {
        type: Number,
        required: [true, 'Nights are required'],
        min: [0, 'Nights cannot be negative'],
      },
      days: {
        type: Number,
        required: [true, 'Days are required'],
        min: [1, 'Days must be at least 1'],
        index: true,
      },
    },
    pricing: {
      basePrice: {
        type: Number,
        required: [true, 'Base price is required'],
        min: [0, 'Base price cannot be negative'],
        index: true,
      },
      originalPrice: {
        type: Number,
        min: [0, 'Original price cannot be negative'],
      },
      currency: {
        type: String,
        default: 'INR',
        uppercase: true,
        trim: true,
      },
      bookingAmount: {
        type: Number,
        default: 0,
        min: [0, 'Booking amount cannot be negative'],
      },
      priceNote: {
        type: String,
        trim: true,
        default: 'per person',
      },
    },
    groupSettings: {
      minSize: {
        type: Number,
        default: 1,
        min: [1, 'Minimum group size must be at least 1'],
      },
      maxSize: {
        type: Number,
        default: 1,
        min: [1, 'Maximum group size must be at least 1'],
      },
      tourManagerIncluded: {
        type: Boolean,
        default: false,
      },
    },
    departures: [departureSchema],
    highlights: [
      {
        icon: {
          type: String,
          trim: true,
          default: '',
        },
        text: {
          type: String,
          required: [true, 'Highlight text is required'],
          trim: true,
        },
      },
    ],
    overview: {
      flights: { type: String, trim: true, default: '' },
      hotel: { type: String, trim: true, default: '' },
      meals: { type: String, trim: true, default: '' },
      transfers: { type: String, trim: true, default: '' },
      guide: { type: String, trim: true, default: '' },
      visa: { type: String, trim: true, default: '' },
      groupSize: { type: String, trim: true, default: '' },
      duration: { type: String, trim: true, default: '' },
    },
    itinerary: [
      {
        day: {
          type: Number,
          required: [true, 'Itinerary day is required'],
          min: [1, 'Itinerary day must be at least 1'],
        },
        title: {
          type: String,
          required: [true, 'Itinerary title is required'],
          trim: true,
        },
        description: {
          type: String,
          trim: true,
          default: '',
        },
        activities: [
          {
            type: String,
            trim: true,
          },
        ],
        meals: {
          breakfast: { type: Boolean, default: false },
          lunch: { type: Boolean, default: false },
          dinner: { type: Boolean, default: false },
        },
      },
    ],
    hotels: [
      {
        name: {
          type: String,
          required: [true, 'Hotel name is required'],
          trim: true,
        },
        stars: {
          type: Number,
          min: [1, 'Hotel stars must be at least 1'],
          max: [5, 'Hotel stars cannot exceed 5'],
        },
        location: {
          type: String,
          trim: true,
          default: '',
        },
        nights: {
          type: String,
          trim: true,
          default: '',
        },
        amenities: [
          {
            type: String,
            trim: true,
          },
        ],
        image: imageSchema,
      },
    ],
    inclusions: [
      {
        type: String,
        trim: true,
      },
    ],
    exclusions: [
      {
        type: String,
        trim: true,
      },
    ],
    images: [imageSchema],
    faqs: [
      {
        question: {
          type: String,
          required: [true, 'FAQ question is required'],
          trim: true,
        },
        answer: {
          type: String,
          required: [true, 'FAQ answer is required'],
          trim: true,
        },
      },
    ],
    testimonials: [
      {
        name: {
          type: String,
          required: [true, 'Testimonial name is required'],
          trim: true,
        },
        city: {
          type: String,
          trim: true,
          default: '',
        },
        rating: {
          type: Number,
          required: [true, 'Testimonial rating is required'],
          min: [1, 'Rating must be at least 1'],
          max: [5, 'Rating cannot exceed 5'],
        },
        review: {
          type: String,
          required: [true, 'Testimonial review is required'],
          trim: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    seo: {
      metaTitle: {
        type: String,
        trim: true,
        maxlength: [160, 'Meta title cannot exceed 160 characters'],
      },
      metaDescription: {
        type: String,
        trim: true,
        maxlength: [320, 'Meta description cannot exceed 320 characters'],
      },
      keywords: [
        {
          type: String,
          trim: true,
        },
      ],
    },
    publishedAt: {
      type: Date,
      default: null,
      index: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

packageSchema.index({ title: 'text', 'country.name': 'text', cities: 'text', 'seo.keywords': 'text' })
packageSchema.index({ status: 1, featured: 1, 'pricing.basePrice': 1 })
packageSchema.index({ packageType: 1, 'duration.days': 1 })
packageSchema.index({ 'departures.departureDate': 1, 'departures.status': 1 })

packageSchema.pre('validate', function preparePackage() {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  if (this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date()
  }

  if (this.status !== 'published') {
    this.publishedAt = null
  }

  if (this.duration && this.duration.days !== undefined && this.duration.nights !== undefined) {
    if (this.duration.days < this.duration.nights) {
      throw new Error('Days cannot be less than nights')
    }
  }

  if (this.pricing && this.pricing.originalPrice !== undefined) {
    if (this.pricing.originalPrice < this.pricing.basePrice) {
      throw new Error('Original price cannot be less than base price')
    }
  }

  if (this.pricing && this.pricing.bookingAmount > this.pricing.basePrice) {
    throw new Error('Booking amount cannot exceed base price')
  }

  if (this.groupSettings && this.groupSettings.minSize > this.groupSettings.maxSize) {
    throw new Error('Minimum group size cannot exceed maximum group size')
  }
})

module.exports = mongoose.model('Package', packageSchema)
