import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Billing() {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = typeof window !== "undefined" ? localStorage.getItem("bookingCart") : null;
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (err) {
      console.error("Failed to parse booking cart:", err);
      return [];
    }
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [payLater, setPayLater] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Please select rooms before proceeding to payment.");
      navigate("/Booking");
      return;
    }

    const bookingSummary = cart
      .map(
        (item) =>
          `${item.name} x ${item.cartQuantity} = Ksh ${item.price * item.cartQuantity}`
      )
      .join("\n");

    let message = `Payment completed successfully!\n\n${bookingSummary}\n\nGrand Total: Ksh ${total}`;

    if (payLater) {
      message +=
        "\n\nYou chose Pay Later. Please pay at check-in or via M-Pesa later.";
    } else if (paymentMethod === "card") {
      message += `\n\nPaid with card ending ${cardNumber.slice(-4)}.`;
    } else {
      message += `\n\nPayment request sent to ${phoneNumber} via ${paymentMethod}.`;
    }

    alert(message);
    localStorage.removeItem("bookingCart");
    localStorage.removeItem("bookingTotal");
    setCart([]);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Billing & Payment</h1>

        {cart.length === 0 ? (
          <div className="bg-white shadow rounded-3xl p-10 text-center">
            <p className="text-xl font-medium mb-4">Your booking cart is empty.</p>
            <button
              type="button"
              onClick={() => navigate("/Booking")}
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Go back to Booking
            </button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-2">
            <section className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Booking Summary</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-lg">{item.name}</p>
                      <span className="text-sm text-slate-500">Qty: {item.cartQuantity}</span>
                    </div>
                    {item.bedrooms && (
                      <p className="text-sm text-slate-600">{item.bedrooms} Bedroom{item.bedrooms > 1 ? "s" : ""}</p>
                    )}
                    {item.features?.length > 0 && (
                      <p className="text-sm text-slate-600">Features: {item.features.join(", ")}</p>
                    )}
                    <p className="text-sm text-slate-600">Price per room: Ksh {item.price}</p>
                    <p className="mt-3 font-semibold">Item total: Ksh {item.price * item.cartQuantity}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-3xl bg-black p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Grand Total</p>
                <p className="mt-3 text-4xl font-bold">Ksh {total}</p>
              </div>
            </section>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
            >
              <h2 className="text-2xl font-semibold">Payment Details</h2>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full rounded-3xl border border-slate-200 px-4 py-3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full rounded-3xl border border-slate-200 px-4 py-3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full rounded-3xl border border-slate-200 px-4 py-3"
                >
                  <option value="card">Card</option>
                  <option value="M-Pesa">M-Pesa</option>
                  <option value="Airtel Money">Airtel Money</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="payLater"
                  type="checkbox"
                  checked={payLater}
                  onChange={(e) => setPayLater(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-black"
                />
                <label htmlFor="payLater" className="text-sm text-slate-700">
                  Pay later at check-in
                </label>
              </div>

              {!payLater && (
                <>
                  {paymentMethod === "card" ? (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          className="w-full rounded-3xl border border-slate-200 px-4 py-3"
                          required
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Expiry</label>
                          <input
                            type="text"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            placeholder="MM/YY"
                            className="w-full rounded-3xl border border-slate-200 px-4 py-3"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">CVV</label>
                          <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                            className="w-full rounded-3xl border border-slate-200 px-4 py-3"
                            required
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="254712345678"
                        className="w-full rounded-3xl border border-slate-200 px-4 py-3"
                        required
                      />
                    </div>
                  )}
                </>
              )}

              <button
                type="submit"
                className="w-full rounded-3xl bg-black py-4 text-lg font-semibold text-white hover:bg-gray-800 transition"
              >
                Complete Payment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Billing;
