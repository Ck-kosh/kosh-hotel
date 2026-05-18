import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import HotelDetails from "./pages/HotelDetails";
import ContactUs from "./pages/ContactUs";
import Billing from "./pages/Billing";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/Booking"
          element={<Booking />}
        />

        <Route
          path="/hotel-details"
          element={<HotelDetails />}
        />

        <Route
          path="/contact-us"
          element={<ContactUs />}
        />

        <Route
          path="/billing"
          element={<Billing />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>

              <AdminDashboard />

            </ProtectedRoute>
          }
        />

      </Routes>

    </div>
  );
}

export default App;