import React, { useState } from "react";

const QuantityBox: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="mt-5 mb-5">
      <label htmlFor="quantity" className="block mb-1 font-medium">
        Quantity
      </label>
      <div className="flex items-center border rounded-lg overflow-hidden w-fit">
        <button
          onClick={decrease}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
        >
          -
        </button>
        <input
          id="quantity"
          type="number"
          value={quantity}
          readOnly
          className="w-12 text-center border-x outline-none"
        />
        <button
          onClick={increase}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityBox;
