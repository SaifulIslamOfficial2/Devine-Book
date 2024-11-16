/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import AddToCart from "../section/addtocart/AddToCart";


function BookCartModal({onOpen,onClose,book, addToCart}) {

  return (
    <Modal show={onOpen}>
    <div className="bg-gray-800 text-white items-center  rounded-lg shadow-lg ps-6 flex flex-col md:flex-row max-w-2xl mx-auto">
      {/* Left Section - Text */}
      <div className="flex-1 md:pr-6 mb-6 md:mb-0 space-y-4 order-2  md:order-1 ">
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-2">
          {book?.author}
        </h2>
        <p className="text-sm text-gray-400 mb-4"> {book?.name}</p>

        {/* Description */}
        <p className="text-gray-300 mb-6 space-y-4">
          {book?.description}
        </p>

        {/* Add to card */}
        <div className=" flex gap-4">
          <AddToCart onAddToCart={() => addToCart(book)} book={book} />

          <button
            onClick={onClose}
            className=" py-2 px-4 bg-white text-black rounded-md hover:bg-[#00D991]"
          >
            Close
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/3 flex-shrink-0 justify-end space-y-4  order-1  md:order-2 ">
        <img
          src={book?.image} 
          alt="Prenlter Prestion Pssquik Cover"
          className="rounded-lg shadow-lg w-[241px] h-[338px] "
        />
      </div>
    </div>
  </Modal>
  )
   
}

export default BookCartModal