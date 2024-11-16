/* eslint-disable react/prop-types */
import BookGalleryItem from "./BookGalleryItem";

function BookGalleryFilter({ bookData, filter, addToCart, addToFavorites, removeFromFavorites }) {
  let filteredData = [...bookData];

  if (filter === "trending") {
    filteredData = bookData.filter((book) => book.status === 5);
  } else if (filter === "new_releases") {
    filteredData = bookData.filter((book) => book.status === "new_releases");
  } else if (filter === "coming_soon") {
    filteredData = bookData.filter((book) => book.status === "coming_soon");
  }
  


  // filter
  if (filter === "name") {
    filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === "rating") {
    filteredData.sort((a, b) => b.rating - a.rating);
  } else if (filter === "price") {
    filteredData.sort((a, b) => a.price - b.price);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {filteredData.map((book) => (
        <BookGalleryItem 
          key={book.id} 
          book={book} 
          addToCart={addToCart} 
          addToFavorites={addToFavorites} 
          removeFromFavorites={removeFromFavorites} 
        />
      ))}
    </div>
  );
}

export default BookGalleryFilter;