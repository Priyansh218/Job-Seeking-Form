const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');

const router = express.Router();

// Set up Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'));
  }
};

const upload = multer({ storage, fileFilter });

// @route POST /api/users/signup
// @desc Register a new user
router.post('/signup', upload.single('cv'), async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, address, zipCode, workExperience, position, customPosition, workingMode } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      zipCode,
      workExperience,
      position: position || customPosition,
      customPosition,
      workingMode,
      cv: req.file.path, // Save the file path
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
