/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdLightMode, MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

function Header({ itemCount, onCartClick, onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState(null);
  const [theme, setTheme] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle theme between dark and light mode
  const themeHandler = () => {
    setTheme(!theme);
    localStorage.setItem("darkTheme", `${!theme}`);
  };

  useEffect(() => {
    if (localStorage.getItem("darkTheme") === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Sidebar toggle handler
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Filter right side item click handler
  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    onFilterChange(filterType);
    setSidebarOpen(false);
  };

  return (
    <header className="z-50 bg-gray-100 dark:bg-slate-900 fixed w-full top-0 left-0">
      <nav className="lg:px-14 p-4 flex justify-between items-center border-b duration-200">
        <a
          className="text-[#00D991] font-semibold text-2xl flex items-center space-x-3"
          href="#"
        >
          DivineBook
        </a>

        {/* For large screen devices */}
        <div className="flex gap-4 ml-auto items-center">
          <IoIosNotifications className="text-[#00D991] hidden md:block text-[50px] bg-[#2EE0A533] p-2 border-2 border-[#00D991] rounded-md" />
          <MdLightMode
            onClick={themeHandler}
            className="text-[#00D991] text-[50px] bg-[#2EE0A533] p-2 border-2 border-[#00D991] rounded-md cursor-pointer"
          />
          <div onClick={onCartClick} className="relative">
            <span className="absolute left-[30px] bottom-[35px] flex items-center justify-center w-8 h-8 bg-[#00D991] rounded-full text-white text-2xl font-medium">
              {itemCount}
            </span>
            <IoCartOutline className="text-[#00D991] text-[50px] bg-[#2EE0A533] p-2 border-2 border-[#00D991] rounded-md cursor-pointer" />
          </div>
        </div>

        {/* Mobile sidebar toggle button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleSidebarToggle}
            className="text-[#00D991] text-4xl p-2"
          >
            <MdMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-slate-900 z-40">
          <div className="flex justify-end p-4">
            <button
              onClick={handleSidebarToggle}
              className="text-white text-4xl"
            >
              <MdClose />
            </button>
          </div>
          {/* Filter options in sidebar */}
          <div className="px-6 py-4">
            <div>
              <h1 className="text-2xl text-green-600 font-bold mb-3 text-center">
                {" "}
                Devine Book{" "}
              </h1>
            </div>
            <h2 className="text-xl text-white font-semibold mb-4 text-center">
              Filter On Page
            </h2>
            <ul>
              <li
                onClick={() => handleFilterClick("name")}
                className={`flex hover:bg-[#00D991] hover:text-black py-2 px-6 rounded-md items-center justify-center ${
                  activeFilter === "name"
                    ? "bg-divineGreen text-gray-800 font-bold"
                    : ""
                }`}
              >
                <FiChevronRight
                  className={`text-white ${
                    activeFilter === "name" ? "text-white" : ""
                  }`}
                />
                <button className="text-white dark:text-white">By name</button>
              </li>

              <li
                onClick={() => handleFilterClick("rating")}
                className={`flex hover:bg-[#00D991] hover:text-black py-2 px-6 rounded-md items-center justify-center ${
                  activeFilter === "rating"
                    ? "bg-divineGreen text-white font-bold"
                    : ""
                }`}
              >
                <FiChevronRight className="text-white" />
                <span className="text-white dark:text-white">By rating</span>
              </li>

              <li
                onClick={() => handleFilterClick("price")}
                className={`flex hover:bg-[#00D991] hover:text-black py-2 px-6 rounded-md items-center justify-center ${
                  activeFilter === "price"
                    ? "bg-divineGreen text-gray-800 font-bold"
                    : ""
                }`}
              >
                <FiChevronRight className=" text-white" />
                <span className="text-white dark:text-white">By price</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
