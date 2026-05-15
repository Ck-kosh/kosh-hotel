import { useEffect, useState } from "react";
import API from "../services/api";

import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";

function Booking() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const response = await API.get("/products");

      setProducts(response.data);

    } catch (error) {

      console.log(error);

      try {
        const module = await import("../../db.json");
        const fallbackProducts = module.default?.products || module.products || [];
        setProducts(fallbackProducts);
      } catch (importError) {
        console.error(importError);
      }
    }
  };

  useEffect(() => {

    const loadProducts = async () => {

      await fetchProducts();
    };

    loadProducts();

  }, []);

  // REFRESH WHEN PRODUCTS UPDATED ELSEWHERE (e.g., admin adds/deletes)
  useEffect(() => {
    const handler = (e) => {
      const detail = e?.detail;

      // If admin provided the new room data, add it locally
      if (detail && !detail.action) {
        setProducts((prev) => {
          // avoid duplicates
          const exists = prev.find((p) => p.id === detail.id);
          if (exists) return prev;
          return [detail, ...prev];
        });
        return;
      }

      // If delete action provided, remove locally
      if (detail && detail.action === "delete") {
        setProducts((prev) => prev.filter((p) => p.id !== detail.id));
        return;
      }

      // Fallback: refetch from API
      fetchProducts();
    };

    window.addEventListener("productsUpdated", handler);

    return () => {
      window.removeEventListener("productsUpdated", handler);
    };
  }, []);

  // BOOK ROOM
  const addToCart = async (product) => {

    const availableRooms =
      product.vacantRooms ?? product.quantity ?? 0;
    const takenRooms =
      product.takenRooms ?? 0;

    if (availableRooms <= 0) {

      alert("Room unavailable");

      return;
    }

    // UPDATE CART
    setCart((prevCart) => {

      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {

        return prevCart.map((item) =>

          item.id === product.id

            ? {
                ...item,
                cartQuantity:
                  item.cartQuantity + 1
              }

            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          cartQuantity: 1
        }
      ];
    });

    // UPDATE UI
    setProducts((prevProducts) =>

      prevProducts.map((item) =>

        item.id === product.id

          ? {
              ...item,
              vacantRooms:
                (item.vacantRooms ?? item.quantity ?? 0) - 1,
              takenRooms:
                (item.takenRooms ?? 0) + 1
            }

          : item
      )
    );

    // UPDATE DATABASE
    try {

      await API.patch(
        `/products/${product.id}`,
        {
          vacantRooms:
            availableRooms - 1,
          takenRooms:
            takenRooms + 1
        }
      );

    } catch (error) {

      console.log(error);
    }
  };

  // CONFIRM BOOKING
  const handleBuy = () => {

    if (cart.length === 0) {

      alert("No rooms selected");

      return;
    }

    const total = cart.reduce(

      (sum, item) =>

        sum +
        (
          item.price *
          item.cartQuantity
        ),

      0
    );

    const items = cart.map((item) =>

      `${item.name}
Rooms: ${item.cartQuantity}
- Ksh ${
        item.price *
        item.cartQuantity
      }`
    ).join("\n");

    alert(

`Booking Successful!

${items}

TOTAL:
Ksh ${total}

Thank you for choosing Kosh Hotel.`
    );

    // CLEAR BOOKINGS
    setCart([]);
  };

  // SEARCH
  const filteredProducts = products.filter(
    (product) =>

      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-[#f5f5f5]">

      {/* HERO SECTION */}
      <div className="relative h-[40vh] w-full">

        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="Hotel"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">

          <p className="text-white uppercase tracking-[5px] mb-4 text-sm">
            Luxury Accommodation
          </p>

          <h1 className="text-white text-5xl md:text-6xl font-light">
            Book Your Stay
          </h1>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* SEARCH */}
        <div className="mb-10">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* ROOMS */}
          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {filteredProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}

            </div>

          </div>

          {/* BOOKING SUMMARY */}
          <Cart
            cart={cart}
            handleBuy={handleBuy}
          />

        </div>

      </div>

    </div>
  );
}


export default Booking;