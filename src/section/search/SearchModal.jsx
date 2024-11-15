/* eslint-disable react/prop-types */
import {Modal } from "flowbite-react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";



function SearchModal({onSearchClose, onSearchOpen,bookData}) {
   
    const [searchTerm, setSearchTerm] = useState("");

  // filter function
  const filteredBooks = bookData.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
   

    <Modal show={ onSearchOpen}>
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white w-full max-w-[800px] p-6 px-6 rounded-lg mx-4 max-h-[300px] overflow-y-auto">
        {/* search input */}
        <div className="flex items-center border-b border-gray-700 pb-2">
          <CiSearch className="text-xl text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Type your favorite book name here ..."
            className="bg-transparent w-full outline-none text-gray-400 placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <RxCross2 className="text-xl text-gray-400 cursor-pointer" onClick={onSearchClose} />
        </div>

        {/* book filder list*/}
        <div className="mt-4">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="flex items-center p-3 mb-2 rounded-md hover:bg-green-500 cursor-pointer"
              >
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-12 h-12 mr-4 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold">{book.name}</h4>
                  <p className="text-xs text-gray-400">{book.author}</p>
                  <p className="text-xs text-green-400 font-bold">BDT: {book.price} TK</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-6">No item found</p>
          )}
        </div>
      </div>
    </div>
    </Modal>
  )
}

export default SearchModal