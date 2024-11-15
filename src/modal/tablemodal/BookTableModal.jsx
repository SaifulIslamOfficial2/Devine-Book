/* eslint-disable react/prop-types */
// BookTableModal.jsx
function BookTableModal({ bookData, onClose, updateQuantity, removeItem }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg max-w-4xl w-full p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Your Carts</h2>
          <button onClick={onClose} className="text-2xl font-bold">
            &times;
          </button>
        </div>

        {/* Cart Items Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-2">
            <table className="w-full text-sm sm:text-base">
              <thead>
                <tr className="text-gray-400">
                  <th className="text-left py-2">Product</th>
                  <th className="text-center py-2">Price</th>
                  <th className="text-center py-2">Quantity</th>
                  <th className="text-right py-2">Total</th>
                  <th className="text-right py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-700">
                    <td className="flex items-center gap-4 py-4">
                      <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded" />
                      <div>
                        <p>{item.name}</p>
                        <p className="text-sm text-gray-400">{item.category}</p>
                      </div>
                    </td>
                    <td className="text-center">${item.price}</td>
                    <td className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-xl font-bold text-gray-300 bg-gray-600 px-2 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-xl font-bold text-gray-300 bg-gray-600 px-2 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-right">${item.price * item.quantity}</td>
                    <td className="text-right">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 font-bold text-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Summary */}
          <div className="col-span-1 bg-gray-700 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${bookData.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span className="text-green-500">Free</span>
            </div>
            <div className="flex justify-between font-bold mb-6">
              <span>Total</span>
              <span>${bookData.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg font-semibold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTableModal;
