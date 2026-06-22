const Destination = require('../models/Destination')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')
const { successResponse } = require('../utils/apiResponse')

const listDestinations = asyncHandler(async (req, res) => {
  const page = Math.max(Number(req.query.page) || 1, 1)
  const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100)
  const filter = {}
  if (!req.user) filter.isActive = true
  if (req.query.country) filter.country = new RegExp(req.query.country, 'i')
  if (req.query.cityType) filter.cityType = req.query.cityType
  if (req.query.featured) filter.isFeatured = req.query.featured === 'true'
  if (req.query.active) filter.isActive = req.query.active === 'true'
  if (req.query.search) filter.$text = { $search: req.query.search }
  const [items, total] = await Promise.all([
    Destination.find(filter).sort({ sortOrder: 1, createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Destination.countDocuments(filter),
  ])
  return successResponse(res, 200, 'Destinations fetched successfully', { destinations: items, items, page, limit, total, totalPages: Math.ceil(total / limit) || 1 })
})

const getDestination = asyncHandler(async (req, res) => {
  const filter = req.params.slug.match(/^[0-9a-fA-F]{24}$/) ? { _id: req.params.slug } : { slug: req.params.slug }
  if (!req.user) filter.isActive = true
  const item = await Destination.findOne(filter)
  if (!item) throw new ApiError(404, 'Destination not found')
  return successResponse(res, 200, 'Destination fetched successfully', { destination: item, item })
})

const createDestination = asyncHandler(async (req, res) => {
  const item = await Destination.create(req.body)
  return successResponse(res, 201, 'Destination created successfully', { destination: item, item })
})

const updateDestination = asyncHandler(async (req, res) => {
  const item = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
  if (!item) throw new ApiError(404, 'Destination not found')
  return successResponse(res, 200, 'Destination updated successfully', { destination: item, item })
})

const deleteDestination = asyncHandler(async (req, res) => {
  const item = await Destination.findByIdAndDelete(req.params.id)
  if (!item) throw new ApiError(404, 'Destination not found')
  return successResponse(res, 200, 'Destination deleted successfully', { id: req.params.id })
})

module.exports = { listDestinations, getDestination, createDestination, updateDestination, deleteDestination }
