const Package = require('../models/Package')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')
const { successResponse } = require('../utils/apiResponse')

const toPackagePayload = (body, userId) => {
  const payload = { ...body }
  if (body.travelStyle && !body.packageType) payload.packageType = body.travelStyle
  if (body.category && !body.packageCategory) payload.packageCategory = body.category
  if (body.isFeatured !== undefined && body.featured === undefined) payload.featured = body.isFeatured
  if (body.isActive !== undefined && !body.status) payload.status = body.isActive ? 'published' : 'archived'
  if (body.price && !body.pricing) {
    payload.pricing = {
      basePrice: body.price.amount || 0,
      originalPrice: body.price.originalAmount,
      currency: body.price.currency || 'INR',
      priceNote: body.price.perPerson === false ? 'total package' : 'per person',
    }
  }
  if (body.duration?.days && body.duration?.nights) payload.duration = body.duration
  if (!payload.country && body.country) payload.country = { name: body.country }
  if (typeof payload.country === 'string') payload.country = { name: payload.country }
  if (body.coverImage && !payload.images?.length) payload.images = [{ ...body.coverImage, type: 'hero' }]
  if (userId) payload.updatedBy = userId
  return payload
}

const listPackages = asyncHandler(async (req, res) => {
  const page = Math.max(Number(req.query.page) || 1, 1)
  const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 100)
  const skip = (page - 1) * limit
  const filter = {}

  if (!req.user) filter.status = 'published'
  if (req.query.status) filter.status = req.query.status
  if (req.query.country) filter['country.name'] = new RegExp(req.query.country, 'i')
  if (req.query.city) filter.cities = new RegExp(req.query.city, 'i')
  if (req.query.travelStyle) filter.packageType = req.query.travelStyle
  if (req.query.packageType) filter.packageType = req.query.packageType
  if (req.query.featured) filter.featured = req.query.featured === 'true'
  if (req.query.minPrice || req.query.maxPrice) filter['pricing.basePrice'] = {}
  if (req.query.minPrice) filter['pricing.basePrice'].$gte = Number(req.query.minPrice)
  if (req.query.maxPrice) filter['pricing.basePrice'].$lte = Number(req.query.maxPrice)
  if (req.query.days) filter['duration.days'] = Number(req.query.days)
  if (req.query.search) filter.$text = { $search: req.query.search }

  const sortMap = {
    price_asc: { 'pricing.basePrice': 1 },
    price_desc: { 'pricing.basePrice': -1 },
    oldest: { createdAt: 1 },
    newest: { createdAt: -1 },
  }
  const sort = sortMap[req.query.sort] || { featured: -1, publishedAt: -1, createdAt: -1 }

  const [items, total] = await Promise.all([
    Package.find(filter).sort(sort).skip(skip).limit(limit),
    Package.countDocuments(filter),
  ])

  return successResponse(res, 200, 'Packages fetched successfully', {
    packages: items,
    items,
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit) || 1,
  })
})

const getPackage = asyncHandler(async (req, res) => {
  const filter = req.params.slug.match(/^[0-9a-fA-F]{24}$/) ? { _id: req.params.slug } : { slug: req.params.slug }
  if (!req.user) filter.status = 'published'
  const item = await Package.findOne(filter)
  if (!item) throw new ApiError(404, 'Package not found')
  return successResponse(res, 200, 'Package fetched successfully', { package: item, item })
})

const createPackage = asyncHandler(async (req, res) => {
  const item = await Package.create({ ...toPackagePayload(req.body, req.user._id), createdBy: req.user._id })
  return successResponse(res, 201, 'Package created successfully', { package: item, item })
})

const updatePackage = asyncHandler(async (req, res) => {
  const item = await Package.findByIdAndUpdate(req.params.id, toPackagePayload(req.body, req.user._id), {
    new: true,
    runValidators: true,
  })
  if (!item) throw new ApiError(404, 'Package not found')
  return successResponse(res, 200, 'Package updated successfully', { package: item, item })
})

const deletePackage = asyncHandler(async (req, res) => {
  const item = await Package.findByIdAndDelete(req.params.id)
  if (!item) throw new ApiError(404, 'Package not found')
  return successResponse(res, 200, 'Package deleted successfully', { id: req.params.id })
})

const updatePackageStatus = asyncHandler(async (req, res) => {
  const update = {}
  if (req.body.status) update.status = req.body.status
  if (req.body.featured !== undefined) update.featured = req.body.featured
  if (req.body.isFeatured !== undefined) update.featured = req.body.isFeatured
  const item = await Package.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true })
  if (!item) throw new ApiError(404, 'Package not found')
  return successResponse(res, 200, 'Package status updated successfully', { package: item, item })
})

module.exports = { listPackages, getPackage, createPackage, updatePackage, deletePackage, updatePackageStatus }
