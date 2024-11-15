/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import BookGalleryFilter from "../../section/bookgallery/BookGalleryFilter";

function Home({ initialbookdataone, filter,addToCart }) {
  return (
    <div>
      {/* Main Content */}
      <main className="top-[2000px] col-span-12 md:col-span-2 p-6 gap-6 justify-center">
        {/* Header */}
        <h1 className="text-center text-3xl top-20 font-bold mb-6 text-black dark:text-white">Book Shop</h1>
        {/* Filtered Book Grid */}
      <BookGalleryFilter addToCart={addToCart} bookData={initialbookdataone} filter={filter} />
      </main>
    </div>
  );
}

export default Home; 
