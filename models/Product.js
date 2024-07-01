const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  coin: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  image: {
    type: String, 
    required: false 
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;