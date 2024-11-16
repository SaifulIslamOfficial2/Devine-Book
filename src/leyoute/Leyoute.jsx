/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Home from "../componenets/home/Home";
import LeftSideBar from "../componenets/leftSide/LeftSideBar";
import MyFooter from "../componenets/myfooter/MyFooter";
import Header from "../componenets/navbar/Header";
import RightSideBar from "../componenets/rightside/RightSideBar";
import initialbookdata from "../data/initialbookdata";
import BookTableModal from "../modal/tablemodal/BookTableModal";
import FavoriteModal from "../modal/FavoriteModal";

function Leyoute({ onSearch }) {
  const initialbookdataone = initialbookdata();

  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);
  const [filter, setFilter] = useState(""); 
  const [favoriteItems, setFavoriteItems] = useState([]);

  // filter handler
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // cart to book add
  const addToCart = (book) => {
    const existingItem = cartItems.find((item) => item.id === book.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  // cart item update
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // cart from item remove
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // cart modal toggol
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addToFavorites = (book) => {
    if (!favoriteItems.some((item) => item.id === book.id)) {
      setFavoriteItems([...favoriteItems, book]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* header */}
      <Header  itemCount={cartItems.length} onCartClick={toggleModal} />

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 text-white justify-center">
        {/* leftSideber*/}
        <div className="col-span-12 md:col-span-2 bg-gray-100 dark:bg-gray-800 duration-200 pe-4">
          <LeftSideBar
            bookData={initialbookdataone}
           
            onSearch={onSearch}
            itemCount={favoriteItems.length}
            onFavoriteClick={() => setIsFavoriteModalOpen(!isFavoriteModalOpen)}
            book={initialbookdataone}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* home */}
        <div className="col-span-12 md:col-span-8 mt-20">
          <Home
            addToCart={addToCart}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            initialbookdataone={initialbookdataone}
            filter={filter} 
          />
        </div>

        {/* rightsideber */}
        <div className="col-span-12 md:col-span-2 bg-gray-100 dark:bg-gray-800 duration-200">
          <RightSideBar onFilterChange={handleFilterChange} />
        </div>
      </div>

      {/* footer */}
      <MyFooter />

      {/* cart  table modal*/}
      {isModalOpen && (
        <BookTableModal
          bookData={cartItems}
          onClose={toggleModal}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      )}

      {/* favourite modal */}
      {isFavoriteModalOpen && (
        <FavoriteModal
          bookData={favoriteItems}
          onClose={() => setIsFavoriteModalOpen(false)}
          onAdd={() => {}}
          onDelete={removeFromFavorites}
        />
      )}
    </div>
  );
}

export default Leyoute;