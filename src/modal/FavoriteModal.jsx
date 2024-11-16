/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";

function FavoriteModal({ bookData, onClose, onDelete }) {
  console.log(bookData);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 text-center text-black dark:text-white">
          Favorites
        </h2>

        {/* Display Favorite Books */}
        <div className="space-y-4">
          {bookData.length > 0 ? (
            bookData.map((book) => (
              <div
                key={book.id}
                className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md"
              >
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-medium text-black dark:text-white">
                    {book.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{book.author}</p>
                </div>
            
                <button onClick={() => onDelete(book.id)} className="ml-2 text-red-600">
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-300">No favorites added.</p>
          )}
        </div>

        {/* Close Button */}
        <div className="flex justify-center mt-6">
          <button onClick={onClose} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteModal;
