const mongoose = require("mongoose");

// Product Schema
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    maxlength: 255
  },
  category: {
    type: String,
    maxlength: 50
  },
  stock: {
    type: Number,
    min: 0
  }
});

const Product = mongoose.model("Product", productSchema);

// Review Schema
const reviewSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product" // Directly referencing the model name as a string
  },
  user: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    maxlength: 255
  }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports.Product = Product;
module.exports.Review = Review;
