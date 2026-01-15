const express = require('express');
const router = express.Router();
const silenceController = require('../controllers/silenceController');

// Route: GET /api/silence
router.get('/silence', silenceController.accessTheVoid);

module.exports = router;