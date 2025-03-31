const express = require("express");
const connectDB = require("./config/db"); 
const productRoutes = require("./routes/product.routes");
const rateLimiter = require("./utils/rateLimiter"); 
const addRateLimitHeaders = require("./utils/addRateLimitHeaders"); 

const app = express();

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(rateLimiter);
app.use(addRateLimitHeaders);

// Routes
app.use("/api/v1/products", productRoutes);
app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to the Shopifylite Server!" });
});


const startServer = async () => {
  try {
      await connectDB();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error.message);
    process.exit(1); // Exit the process on failure
  }
};


if (process.env.NODE_ENV !== "test") {
  startServer();
}

module.exports = app;