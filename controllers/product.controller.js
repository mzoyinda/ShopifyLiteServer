const productService = require("../services/product.service");
const sendResponse = require("../utils/responseHandler");
const getRateLimitHeaders = require("../utils/rateLimitHeaders");

exports.getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;

    const { products, pagination } = await productService.getAllProducts(page, limit);
    const headers = getRateLimitHeaders(req);

    sendResponse(res, 200, "Products retrieved successfully", {
      products,
      pagination,
      links: {
        self: `/api/v1/products?page=${page}`,
        next: page < pagination.total_pages ? `/api/v1/products?page=${page + 1}` : null,
        prev: page > 1 ? `/api/v1/products?page=${page - 1}` : null,
      },
    }, null, headers);
  } catch (error) {
    sendResponse(res, 500, "Internal Server Error", null, error.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return sendResponse(res, 404, "Product not found", null, "No product found with the given ID.");
    }

    const headers = getRateLimitHeaders(req);
    sendResponse(res, 200, "Product details retrieved successfully", { product }, null, headers);
  } catch (error) {
    sendResponse(res, 500, "Internal Server Error", null, error.message);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    const headers = getRateLimitHeaders(req);

    sendResponse(res, 201, "Product created successfully", { product: newProduct }, null, headers);
  } catch (error) {
    sendResponse(res, 422, "Product creation failed", null, error.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
      return sendResponse(res, 404, "Product not found", null, "No product found with the given ID.");
    }

    const headers = getRateLimitHeaders(req);
    sendResponse(res, 200, "Product updated successfully", { product: updatedProduct }, null, headers);
  } catch (error) {
    sendResponse(res, 400, "Product update failed", null, error.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);
    if (!deleted) {
      return sendResponse(res, 404, "Product not found", null, "No product found with the given ID.");
    }

    const headers = getRateLimitHeaders(req);
    sendResponse(res, 200, "Product deleted successfully", null, null, headers);
  } catch (error) {
    sendResponse(res, 500, "Internal Server Error", null, error.message);
  }
};
