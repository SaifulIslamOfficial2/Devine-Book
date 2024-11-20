/* eslint-disable react/prop-types */
import { useState } from "react";

function AddToCart({ book, onAddToCart }) {
  // Added to cart স্টেট ডিক্লেয়ার
  const [isAdded, setIsAdded] = useState(false);

  // ক্লিক হ্যান্ডলার
  const handleAddToCart = () => {
    onAddToCart(); // বাইরের ফাংশন কল
    setIsAdded(true); // স্টেট আপডেট
    setTimeout(() => {
      setIsAdded(false); // 2 সেকেন্ড পর রিসেট
    }, 2000);
  };

  return (
    <div className="flex justify-between gap-3">
      <button
        onClick={handleAddToCart}
        className={`${
          isAdded ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
        } text-white py-1 px-2 rounded-sm flex items-center`}
        disabled={isAdded} // Added হলে বাটন নিষ্ক্রিয়
      >
        {isAdded ? "Added to Cart" : `$${book?.price} | Add to cart`}
      </button>
    </div>
  );
}

export default AddToCart;
