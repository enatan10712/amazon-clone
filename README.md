# Amazon Clone Frontend (React + Vite)

A fully responsive Amazon-inspired frontend built with React, Vite, Tailwind CSS, and Context API. This project fetches real product data from [Fake Store API](https://fakestoreapi.com/).

## 🚀 Features

- **Sticky Header**: Includes logo, search bar, delivery location, account dropdown, and a live cart count.
- **Hero Carousel**: Auto-sliding banner with manual controls and dots.
- **Category Browsing**: Horizontal scrollable category section leading to filtered grids.
- **Product Details**: Detailed page with quantity selectors and "Related Products" suggestions.
- **Cart Management**:
  - Add/Remove items.
  - Update quantities.
  - Persists to `localStorage`.
  - Order summary with subtotal, tax, and total calculation.
- **Responsive Design**: Tailored experience for Mobile, Tablet, and Desktop.
- **Skeleton Loaders**: Smooth UI transitions while fetching data.

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Routing**: React Router DOM v6
- **State Management**: Context API + useReducer
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository** (if applicable) or download the source code.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser**:
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📂 Project Structure

```text
src/
├── assets/         # Static images (Hero banners, etc.)
├── components/     # Reusable UI components (Header, ProductCard, etc.)
├── context/        # CartContext and Reducer logic
├── pages/          # Main route components (Home, Cart, ProductDetail, etc.)
├── utils/          # Helper functions (Currency formatting)
├── App.jsx         # Routing setup
└── main.jsx        # Entry point
```

## ✨ Future Enhancements & Missing Features

While this is a robust frontend implementation, the following could be added to create a production-ready application:

1. **User Authentication**:
   - Integration with Firebase or Auth0 for Sign-in/Sign-up.
   - Profile management and order history.
2. **Search Functionality**:
   - Real-time search filtering across the product catalog.
3. **Real Backend Integration**:
   - Replace Fake Store API with a custom backend (Node/Express or Next.js) for persistent orders and user data.
4. **Payment Processing**:
   - Integration with Stripe or PayPal for the "Proceed to Checkout" flow.
5. **Advanced Filtering**:
   - Filter by price range, brand, or customer rating on the category pages.
6. **Localization**:
   - Multi-language support (i18n).
7. **Reviews & Ratings**:
   - Ability for users to leave reviews and upload photos.

## 🎨 Design Palette

- **Header Background**: `#131921`
- **Amazon Orange (Accent)**: `#febd69`
- **Secondary Navbar**: `#232f3e`
- **Link/Text Blue**: `#007185`

---
Built with ❤️ for learning purposes.
