import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full">

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
          alt="Kosh Hotel"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

          <p className="text-white uppercase tracking-[6px] text-sm mb-4">
            Welcome To
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-light mb-6">
          Kosh Hotel
          </h1>

          <p className="text-gray-200 max-w-2xl text-lg leading-relaxed">
            Experience comfort, elegance, and convenience in one destination.
            Discover premium stays, exceptional hospitality, and unforgettable moments.
          </p>
        </div>

      </section>

      {/* INTRO SECTION */}
      <section className="relative z-10 -mt-24 px-6">

        <div className="max-w-6xl mx-auto bg-white shadow-2xl grid md:grid-cols-2">

          <div className="p-10 md:p-16 flex flex-col justify-center">

            <p className="uppercase tracking-[4px] text-sm text-gray-700 mb-4">
              Luxury & Comfort
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Everything You Need In One Place
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Kosh Hotel combines modern elegance with exceptional hospitality.
              Whether you're traveling for business or relaxation, our rooms,
              dining, and personalized service ensure a memorable stay.
            </p>
{/* 
            <button
              onClick={() => navigate("/Booking")}
              className="bg-black text-white px-8 py-4 uppercase tracking-wider hover:bg-gray-800 transition w-fit"
            >
              Explore Rooms
            </button> */}

          </div>

          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80"
            alt="Elegant Bedroom"
            className="h-full w-full object-cover"
          />

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-28 px-6 bg-[#f8f8f8]">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Designed For Exceptional Experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white p-10 shadow-sm hover:shadow-xl transition duration-300">

              <div className="text-4xl mb-6">🏨</div>

              <h3 className="text-2xl font-medium mb-4">
                Elegant Rooms
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Spacious modern rooms designed with comfort, luxury,
                and relaxation in mind.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 shadow-sm hover:shadow-xl transition duration-300">

              <div className="text-4xl mb-6">🍽️</div>

              <h3 className="text-2xl font-medium mb-4">
                Fine Dining
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Enjoy carefully prepared meals and exceptional service
                throughout your stay.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 shadow-sm hover:shadow-xl transition duration-300">

              <div className="text-4xl mb-6">✨</div>

              <h3 className="text-2xl font-medium mb-4">
                Premium Service
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Our dedicated staff ensures every guest receives
                personalized attention and care.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* IMAGE SECTION */}
      <section className="relative h-[70vh]">

        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80"
          alt="Cozy Bedroom"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

          <div className="text-center text-white px-6">

            <p className="uppercase tracking-[5px] mb-4">
              Experience Luxury
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Your Perfect Stay Awaits
            </h2>

            <button
              onClick={() => navigate("/Booking")}
              className="border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition"
            >
              Reserve Now
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER CTA */}
      <section className="bg-yellow-600 text-white py-20 px-6 text-center">

        <p className="uppercase tracking-[4px] text-sm mb-4 text-white">
          Book Your Stay
        </p>

        <h2 className="text-4xl md:text-5xl font-light mb-8">
          Ready To Experience Kosh Hotel?
        </h2>

        <button
          onClick={() => navigate("/Booking")}
          className="bg-yellow text-black px-8 py-4 uppercase tracking-widest hover:bg-gray-200 transition"
        >
          Go To Booking
        </button>

      </section>
      

    </div>
  );
}

export default Home;