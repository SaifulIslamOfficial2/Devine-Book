/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";

function FavoriteModal({ bookData, onClose, onAdd, onDelete }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Favorite Books</h2>
          <button onClick={onClose} className="text-gray-600 dark:text-white hover:text-red-600 transition duration-150">
            ✖
          </button>
        </div>
        
        {bookData.length > 0 ? (
          <div className="space-y-4">
            {bookData.map((book) => (
              <div key={book.id} className="flex justify-between items-center p-3 bg-gray-200 dark:bg-gray-700 rounded-md">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">{book.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">${book.price}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onAdd(book)}
                    className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => onDelete(book.id)}
                    className="text-red-600 hover:text-red-800 transition duration-150"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300">No favorite books added.</p>
        )}
      </div>
    </div>
  );
}

export default FavoriteModal;
