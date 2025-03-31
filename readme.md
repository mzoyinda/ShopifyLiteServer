## ShopifyLite Server

ShopifyLite Server is a A lightweight and efficient e-commerce backend API built with Node.js, Express, and MongoDB. This project provides essential product management functionalities, including CRUD operations, pagination, and rate limiting.

### Features

✅ Product Management: Create, Read, Update, and Delete products.
✅ Pagination Support: Fetch products with pagination controls.
✅ Rate Limiting: Prevent API abuse with request limits.
✅ Error Handling: Consistent and structured error responses.
✅ DRY Controllers: Optimized controllers using helper functions.

### Technologies Used

- Node.js

- Express.js

- MongoDB & Mongoose

- dotenv


### Getting Started

```Pre-requisites``` : Ensure you have the following installed:

- Node.js (v18+ recommended)

- MongoDB (Local or Cloud)

### Installation

- Clone the repository:

```
git clone https://github.com/mzoyinda/ShopifyLiteServer.git
cd shopifylite-server
```

- Install dependencies: ``` npm install ```

- Create a ```.env``` file in the config folder and add the following:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

- Start the server: ```npm start```

### Start Server

``` npm start```

### 🛠 API Endpoints

| Method  | Endpoint               | Description                 |
|---------|------------------------|-----------------------------|
| GET     | `/api/v1/products`      | Get all products (paginated) |
| GET     | `/api/v1/products/:id`  | Get a product by ID         |
| POST    | `/api/v1/products`      | Create a new product        |
| PUT     | `/api/v1/products/:id`  | Update a product           |
| DELETE  | `/api/v1/products/:id`  | Delete a product           |


### Deployment

This project is deployed on Render using GitHub Actions.


### License

This project is licensed under the MIT License.

### Author

Oyin Dawodu
