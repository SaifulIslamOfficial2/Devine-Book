/* eslint-disable react/prop-types */


function AddToCart({ book, onAddToCart }) {
  
  return (
    <div className="flex justify-between gap-3">
      <button
        onClick={onAddToCart}
        className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-sm flex items-center"
      >
        ${book?.price} | Add to cart
      </button>
    </div>
  );

}

export default AddToCart;
