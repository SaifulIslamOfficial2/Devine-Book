/* eslint-disable no-unused-vars */
import Home from "../componenets/home/Home";
import LeftSideBar from "../componenets/leftSide/LeftSideBar";
import MyFooter from "../componenets/myfooter/MyFooter";
import NavBar from "../componenets/navbar/NavBar";
import RightSideBar from "../componenets/rightside/RightSideBar";
import initialbookdata from "../data/initialbookdata";


function Leyoute() {

    const initialbookdataone = initialbookdata();

  return (
    <div>
      <NavBar />

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4  text-white justify-center ">
        {/* left Sidebar */}
        <div className="col-span-12 md:col-span-2 bg-gray-100 dark:bg-gray-800 duration-200 pe-4">
        <LeftSideBar />
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-8 ">
        <Home initialbookdataone={initialbookdataone} />
        </div>

        {/* right Sidebar */}
       <div className="col-span-12 md:col-span-2 bg-gray-100 dark:bg-gray-800 duration-200">
       <RightSideBar />
       </div>
      </div>

      <MyFooter />
      
    </div>
  );
}

export default Leyoute;
// flex