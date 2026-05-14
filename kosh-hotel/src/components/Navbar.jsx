import { Link } from "react-router-dom";

function Navbar() {

 return (
  <nav className="bg-yellow-600 text-white px-8 py-4 flex items-center justify-between shadow-lg">
    
    {/* Left Side Links */}
    <div className="flex gap-6 font-semibold">
      <Link to="/" className="hover:text-black transition">
        Home
      </Link>

      <Link to="/hotel-details" className="hover:text-black transition">
        Hotel Details
      </Link>

      <Link to="/Booking" className="hover:text-black transition">
        Rooms
      </Link>

      <Link to="/contact-us" className="hover:text-black transition">
        Contact Us
      </Link>

      <Link to="/admin-login" className="hover:text-black transition">
        Admin
      </Link>
    </div>

    {/* Center Button */}
    <div>
      <Link
        to="/Booking"
        className="bg-black text-yellow-500 px-5 py-2 rounded-full font-bold hover:bg-white hover:text-black transition"
      >
        Book Now
      </Link>
    </div>

    {/* Right Side Logo */}
    <h1 className="text-3xl font-bold tracking-wide">
      Kosh Hotel
    </h1>
    
  </nav>
);
}

export default Navbar;