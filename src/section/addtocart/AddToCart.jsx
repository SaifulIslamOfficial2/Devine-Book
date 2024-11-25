/* eslint-disable react/prop-types */
import { useState } from "react";

function AddToCart({ book, onAddToCart }) {
  // Track if the current book is added
  const [isAdded, setIsAdded] = useState(false);

  // Click handler
  const handleAddToCart = () => {
    onAddToCart(); 
    setIsAdded(true); 

  };

  return (
    <div className="flex justify-between gap-3">
      <button
        onClick={handleAddToCart}
        className={`${
          isAdded ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
        } text-white py-1 px-2 rounded-sm flex items-center`}
        disabled={isAdded}
      >
        {isAdded ? "Added to Cart" : `$${book?.price} | Add to cart`}
      </button>
    </div>
  );
}

export default AddToCart;
