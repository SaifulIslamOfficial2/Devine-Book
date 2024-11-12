import { FaRegHeart } from "react-icons/fa"


function AddToCart() {
  return (
    <div className=" flex justify-between gap-3">
    <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-sm flex items-center">
      $140 | Add to cart
    </button>
    <FaRegHeart className=" text-[#00D991] text-[40px] p-1 border-2 border-[#00D991] rounded-md" />
  </div>
  )
}

export default AddToCart