const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    inStock: { type: Boolean },
    imageFilename: { type: [String] },
    reviewStar: { type: Number },
    numberOfReviews: { type: Number },
    description: { type: String, maxLenght: 50 },
    specialPrice: { type: Number, maxLenght: 100000 },
    discountedPrice: { type: Number, maxLenght: 100000 },
    isEnabled: { type: Boolean, default: true },
  },
  { collection: "Product", strict: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = { ProductSchema, Product };
