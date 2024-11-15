/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { HiOutlineFolderAdd } from "react-icons/hi";
import LeftSearchBar from "../leftSearachBar/LeftSearchBar";
import { useState } from "react";
import SearchModal from "../../section/search/SearchModal";

function LeftSideBar({ onFilterChange, bookData, onFavoriteClick }) {
  const [searchModal, setSearchModal] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "trending") onFilterChange("trending");
    if (buttonName === "new_releases") onFilterChange("new_releases");
    if (buttonName === "coming_soon") onFilterChange("coming_soon");
    if (buttonName === "favorites") onFavoriteClick(); // ফেভারিট মোডাল ওপেন
  };

  const searchModalopen = () => {
    setSearchModal(true);
  };

  return (
    <div>
      <div className="fixed left-0 top-24 p-4 hidden md:block mx-auto">
        <LeftSearchBar searchModalopen={searchModalopen} />
        <div
          className={`flex items-center mt-4 py-2 px-4 gap-2 rounded-md cursor-pointer ${activeButton === "trending" ? "bg-divineGreen text-black" : "hover:bg-divineGreen hover:text-black"}`}
          onClick={() => handleButtonClick("trending")}
        >
          <FaFire className="text-1xl text-black dark:text-white" />
          <span className="text-black dark:text-white text-1xl font-medium">
            Trending
          </span>
        </div>
        <div
          className={`flex items-center mt-4 py-2 px-4 gap-2 rounded-md cursor-pointer ${activeButton === "new_releases" ? "bg-divineGreen text-black" : "hover:bg-divineGreen hover:text-black"}`}
          onClick={() => handleButtonClick("new_releases")}
        >
          <HiOutlineFolderAdd className="text-2xl text-black dark:text-white" />
          <span className="text-black dark:text-white text-1xl font-medium">
            New Releases
          </span>
        </div>
        <div
          className={`flex items-center mt-4 py-2 px-4 gap-2 rounded-md cursor-pointer ${activeButton === "coming_soon" ? "bg-divineGreen text-black" : "hover:bg-divineGreen hover:text-black"}`}
          onClick={() => handleButtonClick("coming_soon")}
        >
          <FiDownload className="text-2xl text-black dark:text-white" />
          <span className="text-black dark:text-white text-1xl font-medium">
            Coming Soon
          </span>
        </div>
        <div
          className="flex mt-3 items-center justify-center gap-2 hover:bg-[#00D991] hover:text-black py-2 rounded-md cursor-pointer"
          onClick={() => handleButtonClick("favorites")}
        >
          <CiHeart className="text-2xl text-black dark:text-white" />
          <span className="text-black dark:text-white text-1xl font-medium">
            Favorites
          </span>
          <div className="absolute  left-10 bottom-10 bg-gray-600 dark:bg-white rounded-full w-5 h-5 flex items-center justify-center">
            <span className="dark:text-rose-700 text-white text-xs">0</span>
          </div>
        </div>
      </div>
      <SearchModal
        bookData={bookData}
        onSearchOpen={searchModal}
        onSearchClose={() => setSearchModal(false)}
      />
    </div>
  );
}

export default LeftSideBar;
