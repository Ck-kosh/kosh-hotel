import { useState } from 'react';

const Billing = () => {
  const [service, setService] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Card states
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Mobile money states
  const [phoneNumber, setPhoneNumber] = useState('');

  // Booking option
  const [payLater, setPayLater] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (payLater) {
      alert(
        `Booking for ${service} confirmed successfully!\nYou can pay later using M-Pesa or Airtel Money.`
      );
    } else {
      if (paymentMethod === 'card') {
        alert(
          `Card payment of KES ${amount} for ${service} processed successfully!`
        );
      } else {
        alert(
          `${paymentMethod} payment request sent to ${phoneNumber} for KES ${amount}.`
        );
      }
    }

    // Reset form
    setService('');
    setAmount('');
    setPaymentMethod('card');
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setPhoneNumber('');
    setPayLater(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Billing - Kosh Hotel
      </h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Service */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="service"
            >
              Service
            </label>

            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              required
            >
              <option value="">Select a service</option>
              <option value="Room Booking">Room Booking</option>
              <option value="Spa Service">Spa Service</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Laundry">Laundry</option>
            </select>
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount (KES)
            </label>

            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              required
            />
          </div>

          {/* Pay Later Option */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="payLater"
              checked={payLater}
              onChange={(e) => setPayLater(e.target.checked)}
              className="mr-2"
            />

            <label htmlFor="payLater" className="text-gray-700 text-sm">
              Book now and pay later with M-Pesa or Airtel Money
            </label>
          </div>

          {/* Payment Method */}
          {!payLater && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Payment Method
                </label>

                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                >
                  <option value="card">Card</option>
                  <option value="M-Pesa">M-Pesa</option>
                  <option value="Airtel Money">Airtel Money</option>
                </select>
              </div>

              {/* Card Payment Fields */}
              {paymentMethod === 'card' && (
                <>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="cardNumber"
                    >
                      Card Number
                    </label>

                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="mb-4 flex">
                    <div className="w-1/2 mr-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="expiry"
                      >
                        Expiry (MM/YY)
                      </label>

                      <input
                        type="text"
                        id="expiry"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                        required
                      />
                    </div>

                    <div className="w-1/2 ml-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="cvv"
                      >
                        CVV
                      </label>

                      <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Mobile Money Fields */}
              {(paymentMethod === 'M-Pesa' ||
                paymentMethod === 'Airtel Money') && (
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="e.g. 0712345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                    required
                  />
                </div>
              )}
            </>
          )}

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              {payLater ? 'Book Now' : 'Pay Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Billing;