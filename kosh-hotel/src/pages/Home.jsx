import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full">

        <img
          src="data:image/jpeg;base64,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"
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
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Luxury Hotel"
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
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
          alt="Hotel Interior"
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