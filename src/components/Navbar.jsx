import React, { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const [isShow, setShow] = useState(false);
  const [upArrow, setArrow] = useState(false);
  return (
    <div className="fixed top-0 z-50 w-full  bg-white  border-b-2 border-gray-300  overflow-y-hidden">
      <div className=" flex  justify-between h-[56px] mx-[15%]">
        <div className=" flex items-center gap-10">
          <div className=" flex flex-col gap-1">
              <div className={`text-neutral-600 text-sm leading-tight font-bold ${isActive ? 'border-blue-500' : ''} `}>
                Home
              </div>
              <div className=" w-[30px] h-[2px] bg-blue-500"></div>
          </div>
          <div className="text-neutral-600 text-sm  leading-tight font-bold">
            Orders
          </div>
          <div className="text-neutral-600 text-sm  leading-tight font-bold">
            Integrations
          </div>
          <div className=" flex">
            <div
              onMouseEnter={() => setArrow(true)}
              onMouseLeave={() => setArrow(false)}
              className="h-[50px] flex  items-center transition duration-300 rounded-xl"
            >
              <div className="text-neutral-600 text-sm leading-tight font-bold ">
                {" "}
                Tracking Page{" "}
              </div>
              {upArrow ? (
                <div className=" relative">
                  <RiArrowDropUpLine className=" w-[30px] h-[30px]" />
                  {upArrow && <div className=" absolute mt-20"></div>}
                </div>
              ) : (
                <RiArrowDropDownLine className=" w-[30px] h-[30px]" />
              )}
            </div>
            
          </div>
          <div className="text-neutral-600 text-sm  leading-tight font-bold">
          Partner with Us
          </div>
        </div>

        <div className=" flex gap-10 justify-end    ">
        <div className=" relative mt-4">
          <CiSearch className=" absolute mt-1 " />
          <input
            type="search"
            placeholder="search"
            className=" w-[130px] border-b-[1px] border-gray-500 outline-none px-7"
          />
        </div>
        <div className=" flex gap-2 items-center">
          <IoPersonOutline className=" w-4 h-4 " />
          <div className="text-neutral-600 text-sm flex items-center leading-tight font-bold ">
            Account
          </div>
        </div>
        <div className=" flex gap-2  items-center">
          <IoSettingsOutline className=" w-5 h-5  " />
          <div className="text-neutral-600 text-sm leading-tight font-bold ">
            Settings
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
