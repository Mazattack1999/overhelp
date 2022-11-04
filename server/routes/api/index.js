const router = require('express').Router();
const userRoutes = require('./user-routes');
const helpRequestRoutes = require('./help-request-routes');
const applicationRoutes = require('./application-routes');
const meetingRoutes = require('./meeting-routes');

router.use('/users', userRoutes);
router.use('/help-requests', helpRequestRoutes);
router.use('/applications', applicationRoutes);
router.use('/meetings', meetingRoutes);

module.exports = router;