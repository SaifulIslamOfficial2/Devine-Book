import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

function RightSideBar({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    onFilterChange(filterType);
  };

  return (
    <div>
      <aside className="fixed right-0 top-20 h-screen px-8 hidden md:block mx-auto">
        <div className="mt-4 flex items-center justify-center rounded-md mx-auto hover:text-[#00D991]">
          <h2 className="text-lg font-semibold mb-2 text-black dark:text-white text-center">
            Filter On Page
          </h2>
        </div>
        <div className="flex items-center justify-center gap-2 mx-auto">
          <ul>
            <li
              onClick={() => handleFilterClick("name")}
              className={`flex hover:bg-[#00D991] hover:text-black py-2 px-6 rounded-md items-center justify-center ${
                activeFilter === "name" ? "bg-divineGreen text-gray-800 font-bold" : ""
              }`}
            >
              <FiChevronRight
                className={`text-gray-800 dark:text-white ${
                  activeFilter === "name" ? "text-gray-800" : ""
                }`}
              />
              <button className="text-black dark:text-white">By name</button>
            </li>

            <li
              onClick={() => handleFilterClick("rating")}
              className={`flex hover:bg-[#00D991] hover:text-black py-2 px-6 rounded-md items-center justify-center ${
                activeFilter === "rating" ? "bg-divineGreen text-gray-800 font-bold" : ""
              }`}
            >
              <FiChevronRight className="text-gray-800 dark:text-white" />
              <span className="text-black dark:text-white">By rating</span>
            </li>

            <li
              onClick={() => handleFilterClick("price")}
              className={`flex hover:bg-[#00D991] hover:text-black py-2 px-6 rounded-md items-center justify-center ${
                activeFilter === "price" ? "bg-divineGreen text-gray-800 font-bold" : ""
              }`}
            >
              <FiChevronRight className="text-gray-800 dark:text-white" />
              <span className="text-black dark:text-white">By price</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default RightSideBar;
