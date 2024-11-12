import { FiChevronRight } from "react-icons/fi";

function RightSideBar() {
  return (
    <div>
    {/* Sidebar */}
    <aside className=" fixed right-0 top-20 h-screen px-8  hidden md:block mx-auto ">
    
      <div className=" mt-4  flex items-center justify-center  rounded-md mx-auto hover:text-[#00D991] ">
      <h2 className="text-lg font-semibold mb-2 text-black dark:text-white text-center">
          Filter On Page
        </h2>
      </div>

      <div className="flex items-center justify-center gap-2 mx-auto ">
      <ul className="space-y-1">
          <li className="flex items-center justify-center">
            <FiChevronRight className="mr-2 text-black dark:text-white" />
            <span className="text-black dark:text-white">By name</span>
          </li>
          <li className="flex items-center justify-center">
            <FiChevronRight className="mr-2 text-black dark:text-white" />
            <span className="text-black dark:text-white">By rating</span>
          </li>
          <li className="flex items-center justify-center">
            <FiChevronRight className="mr-2 text-black dark:text-white" />
            <span className="text-black dark:text-white">By price</span>
          </li>
        </ul>
    </div>
    </aside>
  </div>
  );
};

export default RightSideBar;


