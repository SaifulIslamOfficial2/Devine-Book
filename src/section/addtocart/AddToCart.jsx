/* eslint-disable react/prop-types */
import { useState } from "react";

function AddToCart({ book, onAddToCart }) {
  // Added to cart tracking for each book
  const [addedBooks, setAddedBooks] = useState({});

  // Click handle
  const handleAddToCart = () => {
    onAddToCart();
    setAddedBooks((prev) => ({
      ...prev,
      [book.id]: true, // Mark this book as added
    }));

    setTimeout(() => {
      setAddedBooks((prev) => ({
        ...prev,
        [book.id]: false, // Reset added state after 2 seconds
      }));
    }, 2000);
  };

  return (
    <div className="flex justify-between gap-3">
      <button
        onClick={handleAddToCart}
        className={`${
          addedBooks[book.id] ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
        } text-white py-1 px-2 rounded-sm flex items-center`}
        disabled={addedBooks[book.id]} // Disable if already added
      >
        {addedBooks[book.id] ? "Added to Cart" : `$${book?.price} | Add to cart`}
      </button>
    </div>
  );
}

export default AddToCart;
