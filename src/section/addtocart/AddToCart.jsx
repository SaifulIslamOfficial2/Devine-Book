import { FaRegHeart } from "react-icons/fa";

function AddToCart({ bookData, onAddToCart, onAddToFavorites }) {
  return (
    <div className="flex justify-between gap-3">
      <button
        onClick={onAddToCart}
        className="bg-green-600 hover:bg-green-500 text-white py-2 px-2 rounded-sm flex items-center"
      >
        {`$${bookData?.price} | Add to cart`}
      </button>
      <FaRegHeart
        onClick={() => onAddToFavorites(bookData)}
        className="text-gray-700 cursor-pointer hover:text-red-600 transition duration-150"
        size={22}
      />
    </div>
  );
}

export default AddToCart;
