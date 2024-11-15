/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// BookGalleryItem.jsx
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import AddToCart from "../addtocart/AddToCart";
import BookCartModal from "../../modal/BookCartModal";

function BookGalleryItem({ bookData, addToCart }) {
  const [openModal, setOpenModal] = useState(false);

  // Toggles modal visibility
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className="p-4 rounded-lg shadow-lg border max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <div className="space-y-4">
        {/* Image */}
        <div className="relative h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 ">
          <img
            onClick={handleOpenModal}
            src={bookData.image}
            alt={bookData.name}
            className="object-cover w-full h-full rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Book Details */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white text-center">
            {bookData.name}
          </h2>
          <p className="mt-2 text-sm md:text-base text-center text-gray-700 dark:text-gray-300">
            {bookData.author}
          </p>
        </div>
        
        {/* Rating */}
        <div className="flex justify-center gap-1">
          {[...Array(bookData.rating)].map((_, i) => (
            <FaStar key={i} className="text-[#00D991]" />
          ))}
        </div>
        
        {/* Add to Cart Button */}
        <div className="flex justify-center">
          <AddToCart   onAddToCart={() => addToCart(bookData)} bookData={bookData} />
        </div>
        
        {/* Book Cart Modal */}
        {openModal && (
          <BookCartModal
            onOpen={openModal}
            onClose={handleCloseModal}
            bookData={bookData}
            className="z-50 flex items-center justify-center bg-black bg-opacity-50"
            addToCart={ addToCart}
          />
        )}
      </div>
    </div>
  );
}

export default BookGalleryItem;
