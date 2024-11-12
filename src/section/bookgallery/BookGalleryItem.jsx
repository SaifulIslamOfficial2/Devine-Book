/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa"
import AddToCart from "../addtocart/AddToCart"

import { useState } from "react";
import BookCartModal from "../../modal/BookCartModal";


function BookGalleryItem({bookData}) {

    const [openModal, setOpenModal] = useState(false);


  return (

    <div className="p-4  rounded-lg shadow-lg border space-y-4">
    <div >
      <img onClick={()=> setOpenModal(true)} src={bookData.image} alt="image" className="object-cover" />
    </div>
    <div>
      <h2 className=" text-[18px] font-normal w-[349x] text-black dark:text-white ">
        {bookData.name}
      </h2>
      <p className="mt-2 text-black dark:text-white">Comedy/Drama</p>
    </div>
    <div className=" flex gap-2 ">
      <FaStar className=" text-[#00D991]" />
      <FaStar className=" text-[#00D991]" />
      <FaStar className=" text-[#00D991]" />
      <FaStar className=" text-[#00D991]" />
      <FaStar className=" text-[#00D991]" />
    </div>

    {/* add cart  */}
    <AddToCart />
   <BookCartModal onOpen={openModal} onClose={()=> setOpenModal(false)} bookData={bookData} />
  </div>

















//     <div  className=" p-4 rounded-lg shadow-lg">
//     <div className=" h-48 rounded mb-4"><img src={bookData.image} alt="image" /></div>
//     <h2 className="text-lg font-bold">{bookData.name}</h2>
//     <p className="text-gray-400">{bookData.author}</p>
//     <p className="font-bold text-green-400">{bookData.price}</p>
//     <button className="mt-4 w-full p-2 bg-green-600 rounded">
//       Add to cart
//     </button>
//   </div>
  )
}

export default BookGalleryItem