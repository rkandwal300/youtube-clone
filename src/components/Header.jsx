import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context";
import Loader from "../shared/loader";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";

const Header = () => {
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const [SearchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
 

  const searchQueryHandler = (event , click) => {
 
    
    
    if (  SearchQuery?.length > 0)  {
      navigate(`/searchResult/${SearchQuery}`);
    }
  };

  const MobileMenuToogle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pagename = pathname?.split("/")?.filter(Boolean)?.[0];


  let Ytlogo ="https://freebiehive.com/wp-content/uploads/2023/04/Youtube-Logo-White-PNG-758x473.jpg";
  return (
    <div className=" sticky z-20 top-0 left-0 flex flex-row items-center justify-between h-14 w-full px-4 md:px-5  text-gray-300 bg-white dark:bg-black  ">
      {loading && <Loader />}
      <div className="flex w-fit h-5 items-center justify-start">
        {pagename !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] "
            onClick={MobileMenuToogle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className=" flex h-5 items-center">
          <img
            className="h-full hidden dark:md:block"
            src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
            alt="Youtube"
          />
          <img
            className="h-full md:hidden"
            src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
            alt="Youtube"
          />
        </Link>
        </div>

        <div className=" group flex  items-center">
          <div className="flex h-8 md:h-10 md:pl-5 border-2 border-[#4b4949]  rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-g=5 md:group-focus-within:pl-0 ml-3 ">
            <div className="w-10 items-center justify-center hidden group-focus-within:flex "> <IoIosSearch className="text-xl text-white" />
            </div>
            <input
                type="text"
                className=" bg-transparent outline-none text-white px-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                onChange={(e)=>{ setSearchQuery(e.target.value) }}
                onKeyDown ={(e)=>{ 
                  if(e?.key == 'Enter'){
                  searchQueryHandler(e , false)
                  }else{
                    console.log('not enter ')
                  }
                } }
                value={SearchQuery}
                placeholder =" search here......."
            />
          </div>
            <button type="submit" className="w-[40px] md:w-[60px] h-[34px] md:h-10 flex items-center justify-center border border-l-0  border-[#303030] rounded-r-3xl bg-white/[0.3] " 
            onClick={(e)=>{  
              searchQueryHandler(e , true)}}> 
              <IoIosSearch className="text-white text-xl" />
            </button>
      </div>

      <div className="flex  items-center ">
              <div className=" hidden md:flex">
                <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#3030303]/[0.6]">
                  <RiVideoAddLine className="text-xl text-white cursor-pointer" />
                </div>
                <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#3030303]/[0.6]">
                  <FiBell className="text-xl text-white cursor-pointer" />
                </div>
                <div className="flex  ml-2 md:ml-4 h-8 w-8 rounded-full  overflow-hidden">
                 <img 
                  className=" h-full w-full object-cover object-center"

                  src="data:image/png;base64,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"
                  alt="profile"
                 />
                </div>
              </div>
      </div>

    </div>
  );
};

export default Header;
