import { CiHeart } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { HiOutlineFolderAdd } from "react-icons/hi";
import LeftSearchBar from "../leftSearachBar/LeftSearchBar";

function LeftSideBar() {
  return (
    <div>
      <div className=" fixed left-0 top-24 p-4  hidden md:block mx-auto space-y-5">
        {/* seaerch bar */}
        <LeftSearchBar />
        <div className="bg-[#00D991] flex items-center justify-center py-2  gap-4 rounded-md hover:bg-white hover:text-black">
          <FaFire className="text-1xl text-black" />
          <span className="text-1xl font-semibold text-black dark:text-white">
            Trending
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <HiOutlineFolderAdd className="text-2xl hover:text-[#00D991] text-black dark:text-white" />
          <span className="text-black dark:text-white text-1xl font-medium hover:text-[#00D991]">
            New Releases
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5">
          <FiDownload className="text-2xl hover:text-[#00D991]" />
          <span className="text-black dark:text-white text-1xl font-medium hover:text-[#00D991]">
            Coming Soon
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5">
          <CiHeart className="text-2xl hover:text-[#00D991] text-black dark:text-white" />
          <span className="text-black dark:text-white text-1xl font-medium hover:text-[#00D991]">
            Favorites
          </span>
        </div>
      </div>

      {/* Sidebar */}
      {/* <aside className="col-span-12 md:col-span-2 min-h-screen h-screen  bg-gray-800 px-4 border-r hidden md:block mx-auto space-y-5">
        <input
          type="text"
          placeholder="Quick search..."
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white mt-5"
        />
        <div className="bg-[#00D991] flex items-center justify-center py-2 px-2 gap-4 rounded-md  hover:bg-white hover:text-black">
          <FaFire className="text-2xl text-black" />
          <span className="text-2xl font-semibold text-black dark:text-white">
            Trending
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 ">
        <HiOutlineFolderAdd className="text-2xl hover:text-[#00D991] text-black dark:text-white" />
        <span className="text-black dark:text-white text-lg font-medium hover:text-[#00D991]">New Releases</span>
      </div>


      <div className="flex items-center justify-center gap-2 ">
        <FiDownload className="text-2xl hover:text-[#00D991]" />
        <span className="text-black dark:text-white text-lg font-medium hover:text-[#00D991]">Coming Soon</span>
      </div>

       
      <div className="flex items-center justify-center gap-2">
        <CiHeart className="text-2xl hover:text-[#00D991] text-black dark:text-white" />
        <span className="text-black dark:text-white text-lg font-medium hover:text-[#00D991]">Favorites</span>
      </div>
      </aside> */}
    </div>
  );
}

export default LeftSideBar;
