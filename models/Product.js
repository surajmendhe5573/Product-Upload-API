const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { 
     type: String,
     required: true 
    },
  productCategory: { 
    type: String,
    required: true 
},
  productCode: { 
    type: String, 
    required: true 
},
  smallDescription: {
    type: String, 
    required: true 
},
  detailedDescription: { 
    type: String,
    required: true 
},
  productSize: {
     type: String,
     required: true 
    },
  productWoodType: {
     type: String,
     required: true 
    },
  finishType: { 
    type: String,
    required: true 
    },
  productPrice: {
     type: Number,
     required: true 
    },
  images: [{ 
    type: String,
     required: true 
    }],
},
 {
      timestamps: true 
 });

module.exports = mongoose.model('Product', productSchema);
