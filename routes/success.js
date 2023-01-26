const express = require('express');

const successPageController = require('../controllers/success');

const router = express.Router();

router.get ('/success', successPageController.getSuccessPage);

module.exports = router;