const express= require('express');
const Product= require('../models/Product')
const multer= require('multer');
const router= express.Router();
const fs= require('fs');
const path= require('path');

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer setup for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  // Routes
  router.post('/products', upload.array('images', 10), async (req, res) => {
    try {
      const { productName, productCategory, productCode, smallDescription, detailedDescription, productSize, productWoodType, finishType, productPrice } = req.body;
      const images = req.files.map(file => file.path);
  
      const product = new Product({
        productName,
        productCategory,
        productCode,
        smallDescription,
        detailedDescription,
        productSize,
        productWoodType,
        finishType,
        productPrice,
        images,
      });
  
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });

  // GET route to retrieve all products
router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });

  module.exports= router;