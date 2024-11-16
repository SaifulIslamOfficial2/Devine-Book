/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import AddToCart from "../addtocart/AddToCart";
import BookCartModal from "../../modal/BookCartModal";
function BookGalleryItem({
  book,
  addToCart,
  addToFavorites,
  removeFromFavorites,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false); // Heart icon color state

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleFavoriteClick = () => {
    if (isFavorited) {
      setIsFavorited(false); 
      removeFromFavorites(book.id); 
    } else {
      setIsFavorited(true); 
      addToFavorites(book); 
    }
  };

  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-lg border  mx-auto">
      <div className="space-y-4">
        <div className="relative  ">
          <img
            onClick={handleOpenModal}
            src={book.image}
            alt={book.name}
            className="object-cover w-full h-full rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">
            {book.name}
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            {book.author}
          </p>
        </div>
        <div className="flex gap-1">
          {[...Array(book.rating)].map((_, i) => (
            <FaStar key={i} className="text-[#00D991]" />
          ))}
        </div>
        <div className="flex justify-between gap-3 items-center">
          <AddToCart onAddToCart={() => addToCart(book)} book={book} />
          <FaHeart
            onClick={handleFavoriteClick}
            className={`text-2xl cursor-pointer ${
              isFavorited ? "text-[#00D991]" : "text-gray-700"
            }`}
          />
        </div>
        {openModal && (
          <BookCartModal
            onOpen={openModal}
            onClose={handleCloseModal}
            book={book}
            className="z-50 flex items-center justify-center bg-black bg-opacity-50"
            addToCart={addToCart}
          />
        )}
      </div>
    </div>
  );
}

export default BookGalleryItem;
