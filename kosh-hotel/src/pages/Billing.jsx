// import { useState } from 'react';

// const Billing = () => {
//   const [service, setService] = useState('');
//   const [amount, setAmount] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('card');

//   // Card states
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiry, setExpiry] = useState('');
//   const [cvv, setCvv] = useState('');

//   // Mobile money states
//   const [phoneNumber, setPhoneNumber] = useState('');

//   // Booking option
//   const [payLater, setPayLater] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (payLater) {
//       alert(
//         `Booking for ${service} confirmed successfully!\nYou can pay later using M-Pesa or Airtel Money.`
//       );
//     } else {
//       if (paymentMethod === 'card') {
//         alert(
//           `Card payment of KES ${amount} for ${service} processed successfully!`
//         );
//       } else {
//         alert(
//           `${paymentMethod} payment request sent to ${phoneNumber} for KES ${amount}.`
//         );
//       }
//     }

//     // Reset form
//     setService('');
//     setAmount('');
//     setPaymentMethod('card');
//     setCardNumber('');
//     setExpiry('');
//     setCvv('');
//     setPhoneNumber('');
//     setPayLater(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Billing - Kosh Hotel
//       </h1>

//       <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//         <form onSubmit={handleSubmit}>
//           {/* Service */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="service"
//             >
//               Service
//             </label>

//             <select
//               id="service"
//               value={service}
//               onChange={(e) => setService(e.target.value)}
//               className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
//               required
//             >
//               <option value="">Select a service</option>
//               <option value="Room Booking">Room Booking</option>
//               <option value="Spa Service">Spa Service</option>
//               <option value="Restaurant">Restaurant</option>
//               <option value="Laundry">Laundry</option>
//             </select>
//           </div>

//           {/* Amount */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="amount"
//             >
//               Amount (KES)
//             </label>

//             <input
//               type="number"
//               id="amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Pay Later Option */}
//           <div className="mb-4 flex items-center">
//             <input
//               type="checkbox"
//               id="payLater"
//               checked={payLater}
//               onChange={(e) => setPayLater(e.target.checked)}
//               className="mr-2"
//             />

//             <label htmlFor="payLater" className="text-gray-700 text-sm">
//               Book now and pay later with M-Pesa or Airtel Money
//             </label>
//           </div>

//           {/* Payment Method */}
//           {!payLater && (
//             <>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Payment Method
//                 </label>

//                 <select
//                   value={paymentMethod}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                   className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
//                 >
//                   <option value="card">Card</option>
//                   <option value="M-Pesa">M-Pesa</option>
//                   <option value="Airtel Money">Airtel Money</option>
//                 </select>
//               </div>

//               {/* Card Payment Fields */}
//               {paymentMethod === 'card' && (
//                 <>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-700 text-sm font-bold mb-2"
//                       htmlFor="cardNumber"
//                     >
//                       Card Number
//                     </label>

//                     <input
//                       type="text"
//                       id="cardNumber"
//                       value={cardNumber}
//                       onChange={(e) => setCardNumber(e.target.value)}
//                       className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
//                       required
//                     />
//                   </div>

//                   <div className="mb-4 flex">
//                     <div className="w-1/2 mr-2">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="expiry"
//                       >
//                         Expiry (MM/YY)
//                       </label>

//                       <input
//                         type="text"
//                         id="expiry"
//                         value={expiry}
//                         onChange={(e) => setExpiry(e.target.value)}
//                         className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
//                         required
//                       />
//                     </div>

//                     <div className="w-1/2 ml-2">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="cvv"
//                       >
//                         CVV
//                       </label>

//                       <input
//                         type="text"
//                         id="cvv"
//                         value={cvv}
//                         onChange={(e) => setCvv(e.target.value)}
//                         className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
//                         required
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}

//               {/* Mobile Money Fields */}
//               {(paymentMethod === 'M-Pesa' ||
//                 paymentMethod === 'Airtel Money') && (
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="phoneNumber"
//                   >
//                     Phone Number
//                   </label>

//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     placeholder="e.g. 0712345678"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
//                     required
//                   />
//                 </div>
//               )}
//             </>
//           )}

//           {/* Submit Button */}
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
//             >
//               {payLater ? 'Book Now' : 'Pay Now'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Billing;




import React, { useState } from 'react';

export default function Billing() {
  // State management
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('254769021360');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success' or null

  // Quick select preset room rates
  const presets = [10, 25, 50, 100, 250, 500];

  const handlePayment = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) return alert("Please enter a valid booking amount.");
    
    setIsProcessing(true);

    // Simulating backend M-Pesa STK Push API call
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus('success');
    }, 2500);
  };

  const resetForm = () => {
    setPaymentStatus(null);
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 text-slate-200 font-sans">
      <div className="w-full max-w-md bg-[#1e293b] rounded-2xl shadow-2xl border border-slate-800 p-6 relative overflow-hidden">
        
        {/* Top Header Controls */}
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center text-sm text-slate-400 hover:text-white transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Room Details
          </button>
          <button className="text-slate-500 hover:text-slate-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Payment Method Banner */}
        <div className="flex items-center space-x-4 bg-[#111827] bg-opacity-40 p-4 rounded-xl border border-slate-800/50 mb-6">
          <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/30">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">M-Pesa Express</h3>
            <p className="text-xs text-slate-400">Min: $1 • Max: $1,900</p>
          </div>
        </div>

        {/* Main Payment Form */}
        <form onSubmit={handlePayment} className="space-y-6">
          {/* Amount input */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Room Booking Amount (USD)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-semibold text-slate-400">$</span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#111827] border border-slate-800 rounded-xl py-4 pl-10 pr-4 text-2xl font-semibold text-white focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
          </div>

          {/* Quick select presets */}
          <div className="grid grid-cols-6 gap-2">
            {presets.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setAmount(val.toString())}
                className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                  amount === val.toString()
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-[#111827] border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                ${val}
              </button>
            ))}
          </div>

          {/* Phone number input */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              M-Pesa number (registered Safaricom line)
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 2547XXXXXXXX"
              className="w-full bg-[#111827] border border-slate-800 rounded-xl p-4 text-base tracking-wide text-white focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
            <p className="text-xs text-slate-500 mt-2">
              Deposits and room checkout validations use this number only.
            </p>
          </div>

          {/* Action Trigger Button */}
          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center ${
              isProcessing 
                ? 'bg-blue-600/50 text-slate-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-500 text-white active:scale-[0.99] shadow-lg shadow-blue-600/10'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending M-Pesa STK Push...</span>
              </div>
            ) : (
              `Pay $${amount || '0'} via M-Pesa`
            )}
          </button>
        </form>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center space-x-6 mt-6 text-xs text-slate-500 border-t border-slate-800/60 pt-4">
          <span className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>Secure Payment</span>
          <span className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>Instant Booking</span>
          <span className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>24/7 Desk Help</span>
        </div>

        {/* Success Modal Overlay */}
        {paymentStatus === 'success' && (
          <div className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6 text-center animate-fade-in">
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-full text-emerald-400 mb-4 animate-bounce">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Payment Successfully Received!</h2>
            <p className="text-slate-400 text-sm max-w-xs mb-6">
              Your room transaction for <span className="text-emerald-400 font-semibold">${amount}</span> has been processed. A confirmation text was dispatched to <span className="text-slate-200 font-medium">{phoneNumber}</span>.
            </p>
            <button
              onClick={resetForm}
              className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors border border-slate-700"
            >
              Done & View Receipt
            </button>
          </div>
        )}

      </div>
    </div>
  );
}