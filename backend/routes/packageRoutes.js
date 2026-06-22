const express = require('express')
const packageController = require('../controllers/packageController')
const { protect } = require('../middleware/authMiddleware')
const { authorize } = require('../middleware/roleMiddleware')

const router = express.Router()
const optionalAuth = (req, res, next) => {
  if (!req.headers.authorization) return next()
  return protect(req, res, next)
}

router.get('/', optionalAuth, packageController.listPackages)
router.get('/:slug', optionalAuth, packageController.getPackage)
router.post('/', protect, authorize('super_admin'), packageController.createPackage)
router.patch('/:id', protect, authorize('super_admin'), packageController.updatePackage)
router.delete('/:id', protect, authorize('super_admin'), packageController.deletePackage)
router.patch('/:id/status', protect, authorize('super_admin'), packageController.updatePackageStatus)

module.exports = router
