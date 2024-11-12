import { useEffect, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";


function Header() {
    const [theme, setTheme] = useState();

    const themeHandler = () => {
      setTheme(!theme);
      localStorage.setItem("darkTheme", `${!theme}`);
      localStorage.getItem("darkTheme");
    };
  
    useEffect(() => {
      if (localStorage.getItem("darkTheme") == "true") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
    return (
      <header className=" bg-gray-100 dark:bg-slate-900  pt-2 w-full md:bg-transparent top-0 left-0 right-0">
        <nav  className="lg:px-14 p-4 bg-gray-100 dark:bg-slate-900   top-0 left-0 right-0 fixed border-b duration-200">
          <div className=" justify-between text-base flex gap-8 items-center">
            <a
              className=" text-[#00D991] font-semibold text-2xl flex items-center space-x-3"
              href=""
            >
              DivineBook
            </a>
  
            <div className=" flex gap-4">
              <IoIosNotifications className="  text-[#00D991] text-[50px] bg-[#2EE0A533] p-2 border-2 border-[#00D991] rounded-md" />
              <MdLightMode
                onClick={themeHandler}
                className=" text-[#00D991] text-[50px] bg-[#2EE0A533] p-2 border-2 border-[#00D991] rounded-md"
              />
              <div className=" relative">
                <span className=" left-[30px] bottom-[35px] absolute flex items-center justify-center w-8 h-8 bg-[#00D991] rounded-full text-white text-2xl font-medium">
                  3
                </span>
                <IoCartOutline className=" text-[#00D991] text-[50px] bg-[#2EE0A533] p-2 border-2 border-[#00D991] rounded-md" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  

export default Header