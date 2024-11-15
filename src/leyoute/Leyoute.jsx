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
  const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false); // ফেভারিট মোডালের জন্য
  
  const [filter, setFilter] = useState("");
  const [favoriteItems, setFavoriteItems] = useState([]); // ফেভারিট আইটেম সংরক্ষণের জন্য

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

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

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleFavoriteModal = () => {
    setIsFavoriteModalOpen(!isFavoriteModalOpen);
  };

  // ফেভারিট ফাংশনালিটি
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
      <Header itemCount={cartItems.length} onCartClick={toggleModal} />
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 text-white justify-center">
        <div className="col-span-12 md:col-span-2 bg-gray-100 dark:bg-gray-800 duration-200 pe-4">
          <LeftSideBar
            bookData={initialbookdataone}
            onFilterChange={handleFilterChange}
            onSearch={onSearch}
            onFavoriteClick={toggleFavoriteModal} // ফেভারিট মোডাল ট্রিগার
          />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Home
            addToCart={addToCart}
            addToFavorites={addToFavorites} // ফেভারিট যোগ
            initialbookdataone={initialbookdataone}
            filter={filter}
          />
        </div>
        <div className="col-span-12 md:col-span-2 bg-gray-100 dark:bg-gray-800 duration-200">
          <RightSideBar onFilterChange={handleFilterChange} />
        </div>
      </div>
      <MyFooter />
      {isModalOpen && (
        <BookTableModal
          bookData={cartItems}
          onClose={toggleModal}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      )}
      {isFavoriteModalOpen && (
        <FavoriteModal
          bookData={favoriteItems}
          onClose={toggleFavoriteModal}
          onAdd={addToCart}
          onDelete={removeFromFavorites}
        />
      )}
    </div>
  );
}

export default Leyoute;
