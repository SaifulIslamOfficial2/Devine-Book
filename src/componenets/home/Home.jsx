/* eslint-disable react/prop-types */

import BookGalleryItem from "../../section/bookgallery/BookGalleryItem"


function Home({initialbookdataone}) {
  return (
    <div>
        {/* Main Content */}
        <main className=" top-[2000px] col-span-12 md:col-span-2 p-6 gap-6 justify-center">
          {/* Header */}
          <h1 className="text-center text-3xl top-20 font-bold mb-6 text-black dark:text-white">Book Shop</h1>
          {/* Book Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center justify-center">
            {initialbookdataone.map((book => (
                <BookGalleryItem key={book.id} bookData={book} />
            )))}
          </div>
        </main>
    </div>

  )
}

export default Home;

// flex-1