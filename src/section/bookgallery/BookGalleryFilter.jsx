/* eslint-disable react/prop-types */
import BookGalleryItem from "./BookGalleryItem";

function BookGalleryFilter({ bookData, filter , addToCart }) {
  let filterData = [...bookData];

  // filter 
  if (filter === "name") {
    filterData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === "rating") {
    filterData.sort((a, b) => b.rating - a.rating);
  } else if (filter === "price") {
    filterData.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {filterData.map((book) => (
        <BookGalleryItem   addToCart={addToCart} key={book.id} bookData={book} />
      ))}
    </div>
  );
}

export default BookGalleryFilter;
