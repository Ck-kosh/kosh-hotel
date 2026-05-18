# Kosh Hotel

Kosh Hotel is a React + Vite hotel booking application that allows users to browse hotels, add bookings to cart, and purchase bookings while an admin manages inventory through a protected dashboard.

---

# Features

## Customer Features

- View prooms from db.json
- Search a room
- View Booking totals automatically
- bBook for a room
- Real-time quantity updates

---

## Admin Features

- Firebase Admin Login
- Protected Admin Dashboard
- Edit room prices
- Edit room quantities
- Add new room
- Deleteroom
- Logout functionality

---

# Technologies Used

- React
- Vite
- Tailwind CSS
- Axios
- Firebase Authentication
- JSON Server
- React Router DOM

---

# Project Structure

```bash
src/
│
├── components/
│   ├── Cart.jsx
│   ├── client.jsx
│   ├── ProductCard.jsx
│   ├── ProtectedRoute.jsx
│   └── SearchBar.jsx
│
├── pages/
│   ├── AddProduct.jsx
│   ├── AdminDashboard.jsx
│   ├── AdminLogin.jsx
│   ├──Billing.jsx
│   ├──Booking.jsx
│   ├──ContactUs.jsx
│   ├── Home.jsx
│   └── HotelDetails.jsx
│
├── services/
│   └── firebase.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/kosh-hotel.git
```

---

## 2. Open Project

```bash
cd kosh-hotel
```

---

## 3. Install Dependencies

```bash
npm install
```

---

# Required Packages

```bash
npm install axios react-router-dom firebase
```

---

# Start React App

```bash
npm run dev
```

---

# Start JSON Server

Open another terminal and run:

```bash
npx json-server --watch db.json --port 3001
```

---

# Firebase Setup

Create a Firebase project and enable:

- Authentication
- Email/Password Login

Then add your Firebase configuration inside:

```bash
src/services/firebase.js
```

Example:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};
```

---

# Admin Login

Current Admin Credentials:

```bash
Email:
kosh-hotel@gmail.com

Password:
kosh-hotelshopping
```

---

# Example db.json

```json
{
  "products": [
    {
      "id": 1,
      "name": "room",
      "price": 4500,
      "quantity": 3,
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff"
    }
  ]
}
```

---

# Future Upgrades

## Planned Features

- Mpesa payment integration
- Stripe payment gateway
- Card payment support
- Automatic change calculator
- User authentication
- Product categories
- Product ratings and review
- Mobile responsiveness improvements
- Database migration from JSON Server to Firebase Firestore
- Sales analytics dashboard

---

# Example Future Change Calculator

```js
const total = 4500;
const paid = 5000;

const change = paid - total;

console.log(`Change: Ksh ${change}`);
```

---

# Learning Objectives

This project demonstrates:

- React component structure
- State management
- API requests using Axios
- Firebase authentication
- CRUD operations
- Protected routes
- JSON Server integration
- Real-time UI updates

---

# Author

Developed by Elias Kosh

---

# License

This project is for educational purposes.
