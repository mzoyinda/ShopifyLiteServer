const Product = require("../models/product.model");

exports.getAllProducts = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  // Fetch products with pagination
  const products = await Product.find()
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  const totalProducts = await Product.countDocuments();
  const totalPages = Math.ceil(totalProducts / limit);

  return {
    products,
    pagination: {
      current_page: page,
      per_page: limit,
      total_pages: totalPages,
      total_products: totalProducts,
    },
  };
};

exports.getProductById = async (id) => {
  return await Product.findOne({ id });
};

exports.createProduct = async (productData) => {
  // Find the last created product and get its ID
  const lastProduct = await Product.findOne().sort({ id: -1 });

  // calculate next ID
  let nextId = "P001"; // Default if no products exist
  if (lastProduct) {
    const lastIdNumber = parseInt(lastProduct.id.replace("P", ""), 10);
    nextId = `P${String(lastIdNumber + 1).padStart(3, "0")}`;
  }

  const newProduct = new Product({ ...productData, id: nextId });

  return await newProduct.save();
};

exports.updateProduct = async (id, data) => {
  return await Product.findOneAndUpdate({ id }, data, { new: true });
};

exports.deleteProduct = async (id) => {
  return await Product.findOneAndDelete({ id });
};
