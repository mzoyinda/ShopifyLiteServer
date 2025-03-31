const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    stock_status: {
      type: String,
      enum: ["in_stock", "out_of_stock"],
      required: true,
    },
    sku: {
      type: String,
      unique: true,
      required: true,
    },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
