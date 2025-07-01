import React, { useState } from "react";
import { NavLink } from "react-router-dom";

let Navbar = () => {
  // Handling Navbar
  let [isNav, setNav] = useState(false);
  let handleNav = () => {
    setNav((preVal) => !preVal);
  };

  return (
    <>
      <div className="block text-center justify-between items-baseline sm:flex ">
        {/* Part-1 */}
        <div className="flex items-baseline justify-between">
          <h1 className="mb-2 font-bricolage text-left text-2xl text-[#3a51ff] sm:text-2xl">
            Sweply
          </h1>
          <i
            className={`ri-menu-line text-2xl sm:hidden ${
              !isNav ? "" : "hidden"
            } motion-preset-pop motion-duration-200`}
            onClick={handleNav}
          ></i>
          <i
            className={`ri-close-large-line sm:hidden text-2xl ${
              isNav ? "" : "hidden"
            } motion-preset-pop motion-duration-200`}
            onClick={handleNav}
          ></i>
        </div>
        {/* Part-2 */}
        <div
          className={`block sm:gap-8 md:gap-14 lg:gap-20 font-space sm:flex text-md ${
            isNav ? "" : "hidden"
          } `}
        >
          <div className="my-4">
            <NavLink
              to={"/drop"}
              className={({ isActive }) =>
                isActive
                  ? "block w-full sm:inline-block sm:w-auto text-center font-space bg-zinc-100 border border-zinc-200 px-6 py-1 rounded hover:bg-zinc-100 active:bg-zinc-100"
                  : " block w-fullbg-white  px-6 py-1 rounded border-1 border-white hover:bg-zinc-100 active:bg-zinc-100"
              }
              onClick={handleNav}
            >
              Drop
            </NavLink>
          </div>
          <div className="my-4">
            <NavLink
              to={"/flow"}
              className={({ isActive }) =>
                isActive
                  ? "block w-full sm:inline-block sm:w-auto text-center font-space bg-zinc-100 border border-zinc-200 px-6 py-1 rounded hover:bg-zinc-100 active:bg-zinc-100"
                  : " block w-fullbg-white  px-6 py-1 rounded border-1 border-white hover:bg-zinc-100 active:bg-zinc-100"
              }
              onClick={handleNav}
            >
              Flow
            </NavLink>
          </div>
          <div className="my-4">
            <NavLink
              to={"/archive"}
              className={({ isActive }) =>
                isActive
                  ? "block w-full sm:inline-block sm:w-auto text-center font-space bg-zinc-100 border border-zinc-200 px-6 py-1 rounded hover:bg-zinc-100 active:bg-zinc-100"
                  : "block w-full bg-white  px-6 py-1 rounded border-1 border-white hover:bg-zinc-100 active:bg-zinc-100"
              }
              onClick={handleNav}
            >
              Archive
            </NavLink>
          </div>
        </div>
        {/* Part-3 */}
        <div>
          <button
            className={`mt-2 w-full font-space bg-[#3A86FF] text-[#F5F7FA] px-4 py-1 rounded active:bg-[#3a51ff] sm:flex ${
              isNav ? "" : "hidden"
            }`}
            onClick={handleNav}
          >
            SignIn
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
