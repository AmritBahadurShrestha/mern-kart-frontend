import { useState } from "react";
import { useLocation } from "react-router";
import { FaRupeeSign } from "react-icons/fa6";

const Payment = () => {
  const location = useLocation();
  const total = location.state?.total || 0;

  const [method, setMethod] = useState("card");

  const handlePayment = () => {
    if (method === "card") {
      alert("Processing card payment...");
    } else if (method === "esewa") {
      alert("Redirecting to eSewa...");
    } else if (method === "khalti") {
      alert("Redirecting to Khalti...");
    } else {
      alert("Order placed with Cash on Delivery!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Payment</h2>

      {/* Total */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
        <p className="text-lg text-gray-700">
          Total Amount:{" "}
          <span className="font-bold text-indigo-600 flex items-center text-xl">
            <FaRupeeSign size={18} className="mr-1" />
            {total.toLocaleString()}
          </span>
        </p>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Select Payment Method
        </h3>

        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={method === "card"}
              onChange={(e) => setMethod(e.target.value)}
              className="h-4 w-4 text-indigo-600"
            />
            <span className="text-gray-700 font-medium">Credit / Debit Card</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="esewa"
              checked={method === "esewa"}
              onChange={(e) => setMethod(e.target.value)}
              className="h-4 w-4 text-indigo-600"
            />
            <span className="text-gray-700 font-medium">eSewa</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="khalti"
              checked={method === "khalti"}
              onChange={(e) => setMethod(e.target.value)}
              className="h-4 w-4 text-indigo-600"
            />
            <span className="text-gray-700 font-medium">Khalti</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={method === "cod"}
              onChange={(e) => setMethod(e.target.value)}
              className="h-4 w-4 text-indigo-600"
            />
            <span className="text-gray-700 font-medium">Cash on Delivery</span>
          </label>
        </div>

        {/* Conditional Form for Card */}
        {method === "card" && (
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="password"
                  placeholder="***"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </form>
        )}

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          className="cursor-pointer mb-25 mt-6 w-full bg-green-600 text-white py-3 rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transition-all font-semibold text-lg"
        >
          {method === "cod" ? "Place Order" : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default Payment;
