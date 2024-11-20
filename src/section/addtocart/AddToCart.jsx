/* eslint-disable react/prop-types */
import { useState } from "react";

function AddToCart({ book, onAddToCart }) {
  // Added to cart
  const [isAdded, setIsAdded] = useState(false);

  //click handle 
  const handleAddToCart = () => {
    onAddToCart(); 
    setIsAdded(true); 
    setTimeout(() => {
      setIsAdded(false); 
    }, 2000);
  };

  return (
    <div className="flex justify-between gap-3">
      <button
        onClick={handleAddToCart}
        className={`${
          isAdded ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
        } text-white py-1 px-2 rounded-sm flex items-center`}
        disabled={isAdded} // Added button 
      >
        {isAdded ? "Added to Cart" : `$${book?.price} | Add to cart`}
      </button>
    </div>
  );
}

export default AddToCart;
