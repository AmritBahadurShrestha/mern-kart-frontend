import React from "react";

interface IProps {
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}
const QuantityInput: React.FC<IProps> = ({quantity, setQuantity}) => {

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
          className="cursor-pointer px-3 py-1 bg-gray-100 hover:bg-gray-200"
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
          className="cursor-pointer px-3 py-1 bg-gray-100 hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
