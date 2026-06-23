# Advanced E-Commerce Application
Note: Work in progress
## Overview

The Advanced E-Commerce Application is a React-based online shopping platform that demonstrates modern frontend development techniques using React Query, Redux Toolkit, and the FakeStoreAPI. The application allows users to browse products, filter products by category, add items to a shopping cart, manage cart contents, and complete a simulated checkout process.

This project was developed to practice advanced React concepts including asynchronous data fetching, global state management, session persistence, and dynamic user interfaces.

---

## Features

### Product Catalog

* Display all products from FakeStoreAPI
* View product details including:

  * Title
  * Price
  * Category
  * Description
  * Rating
  * Product Image
* Add products directly to the shopping cart

### Category Navigation

* Dynamically fetch categories from FakeStoreAPI
* Filter products by selected category
* Category dropdown populated automatically from API data

### Shopping Cart

* Add products to cart from the product listing page
* Remove products from cart
* View quantity of products added
* View product images and pricing
* Display total number of products
* Display total cart value

### Redux Toolkit State Management

* Centralized cart state management
* Redux actions and reducers for:

  * Adding products
  * Removing products
  * Updating quantities
  * Clearing the cart

### Session Storage Persistence

* Cart data persists using sessionStorage
* Automatically restores cart contents when page reloads

### Checkout Simulation

* Simulated checkout process
* Clears Redux state
* Clears sessionStorage
* Displays confirmation message after successful checkout

### Error Handling

* Loading states while data is being fetched
* API error handling
* Product image fallback handling for missing images

---

## Technologies Used

* React
* React Router DOM
* React Query (TanStack Query)
* Redux Toolkit
* React Redux
* JavaScript / TypeScript
* CSS / Bootstrap / Tailwind CSS
* FakeStoreAPI

---

## API Endpoints

### Get All Products

```http
GET https://fakestoreapi.com/products
```

### Get Categories

```http
GET https://fakestoreapi.com/products/categories
```

### Get Products by Category

```http
GET https://fakestoreapi.com/products/category/{category}
```

---

## Project Structure

```plaintext
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── cart/
│       ├── cartSlice.js
│
├── components/
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── CategoryFilter.jsx
│   ├── ShoppingCart.jsx
│   └── Navbar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
│
├── hooks/
│   └── useProducts.js
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-app.git
```

### Navigate to the Project Folder

```bash
cd ecommerce-app
```

### Install Dependencies

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

or

```bash
npm start
```

Open your browser and visit:

```plaintext
http://localhost:5173
```

or

```plaintext
http://localhost:3000
```

depending on your setup.

---

## Viewing the Application

### Development Mode

1. Open a terminal.
2. Navigate to the project directory.
3. Run:

```bash
npm install
npm run dev
```

4. Open:

```plaintext
http://localhost:5173
```

### Production Build

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Open:

```plaintext
http://localhost:4173
```

---

## Redux Shopping Cart State

The shopping cart stores product objects in Redux and synchronizes data with sessionStorage.

Example cart item:

```javascript
{
  id: 1,
  title: "Product Name",
  price: 29.99,
  image: "image-url",
  quantity: 2
}
```

---

## Session Storage

Cart data is automatically saved using:

```javascript
sessionStorage.setItem(
  "cart",
  JSON.stringify(cartItems)
);
```

Cart data is restored when the application loads:

```javascript
const savedCart = JSON.parse(
  sessionStorage.getItem("cart")
);
```

---

## Image Fallback Handling

Some FakeStoreAPI product images may return 404 errors.

To ensure a consistent user experience, a placeholder image is displayed when an image fails to load.

Example:

```javascript
<img
  src={product.image}
  alt={product.title}
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/200";
  }}
/>
```

---

## Checkout Process

When the user clicks Checkout:

1. Order is simulated.
2. Cart is cleared from Redux state.
3. sessionStorage is cleared.
4. Success message is displayed.

Example:

```javascript
dispatch(clearCart());
sessionStorage.removeItem("cart");
```

---

## Future Improvements

* User authentication
* Product search
* Product sorting
* Wishlist functionality
* Product detail pages
* Responsive mobile enhancements
* Dark mode
* Backend order processing

---

## Video Demonstration Requirements

During the project presentation video:

### Project Overview

Explain:

* What the application does
* The problem it solves

### How It Works

Briefly discuss:

* React Query data fetching
* Redux Toolkit state management
* Session storage persistence

### Demonstration

Show:

* Product catalog
* Category filtering
* Adding products to cart
* Removing products from cart
* Checkout process

⚠️ The presentation must not exceed 5 minutes and must include you on camera.

---

## Author

**Devin Hazel**

Front-End Developer

Email: [devinhazel@gmail.com](mailto:devinhazel@gmail.com)

---

## License

This project is for educational purposes and portfolio demonstration.

