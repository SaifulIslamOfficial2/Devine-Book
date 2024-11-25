/* eslint-disable react/prop-types */

import { CiHeart } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import {  FiFolderPlus } from "react-icons/fi";
import LeftSearchBar from "../leftSearachBar/LeftSearchBar";
import { useState } from "react";
import SearchModal from "../../section/search/SearchModal";
import { MdOutlineUpcoming } from "react-icons/md";

function LeftSideBar({ onFilterChange, bookData, onFavoriteClick, itemCount }) {
  const [searchModal, setSearchModal] = useState(false);
  const [activeButton, setActiveButton] = useState("");


  
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "trending") onFilterChange(5);
    if (buttonName === "new_releases") onFilterChange("new_releases");
    if (buttonName === "coming_soon") onFilterChange("coming_soon");
    if (buttonName === "favorites") onFavoriteClick(); // Favorites modal open
  };


  const searchModalopen = () => {
    setSearchModal(true);
  };

  return (
    <div>
      <div className="fixed left-0 top-24 p-4 hidden md:block mx-auto space-y-2">
        <LeftSearchBar searchModalopen={searchModalopen} />

          
        <div
          className={`flex hover:bg-[#00D991]  items-center mt-4 py-2 px-4 gap-2 rounded-md cursor-pointer hover:bg-divineGreen hover:text-black ${activeButton === "trending" ? "bg-divineGreen text-black" : " hover:text-black"}`}
          onClick={() => handleButtonClick("trending")}
        >
          <FaFire className=" text-[18px] text-gray-800 dark:text-white" />
          <button className="text-[18px] text-gray-800 dark:text-white">Trending</button>
        </div>


        
        <div
          className={`flex hover:bg-[#00D991] items-center mt-4 py-2 px-4 gap-2 rounded-md cursor-pointer hover:bg-divineGreen hover:text-black ${activeButton === "new_releases" ? "bg-divineGreen text-black" : "hover:bg-divineGreen hover:text-black"}`}
          onClick={() => handleButtonClick("new_releases")}
        >
          <FiFolderPlus className=" text-[16px] text-gray-800 dark:text-white" />
          <button className="text-[16px] text-gray-800 dark:text-white">New Releases</button>
        </div>


        <div
          className={`flex hover:bg-[#00D991] items-center mt-4 py-2 px-4 gap-2 rounded-md cursor-pointer hover:bg-divineGreen hover:text-black ${activeButton === "coming_soon" ? "bg-divineGreen text-black" : "hover:bg-divineGreen hover:text-black"}`}
          onClick={() => handleButtonClick("coming_soon")}
        >
          <MdOutlineUpcoming className=" text-[16px] text-gray-800 dark:text-white" />
          <button className=" text-[16px] text-gray-800 dark:text-white">Coming Soon</button>
        </div>


        {/* favourite batton*/}
        <div
          className="flex items-center mt-4 py-2 px-4 gap-2 rounded-md cursor-pointer hover:bg-divineGreen hover:text-black"
          onClick={() => handleButtonClick("favorites")}
        >
          <CiHeart className="text-2xl text-black dark:text-white" />
          <span className="text-black dark:text-white text-1xl font-medium">
            Favorites
          </span>
          <div className="absolute left-10 bottom-10 bg-gray-600 dark:bg-white rounded-full w-5 h-5 flex items-center justify-center">
            <span className="dark:text-rose-700 text-white text-xs">{itemCount}</span>
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
