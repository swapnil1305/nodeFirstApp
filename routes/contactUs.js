const express = require('express'); 

const contactUsController = require('../controllers/contactus');

const router = express.Router();

router.get ('/contactus', contactUsController.getContactUs);

router.post('/contactus', contactUsController.postContactUs);

module.exports = router;