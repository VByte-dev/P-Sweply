import React, { useState } from "react";
import { Link } from "react-router-dom";

let Navbar = () => {

  // Handling Navbar
  let [isNav, setNav] = useState(false);
  let handleNav = ()=>{
    setNav((preVal)=>!preVal);
  }

  return (
    <>
      <div className="block text-center justify-between items-center sm:flex">
        {/* Part-1 */}
        <div className="flex items-baseline justify-between">
        <h1 className="mb-2 font-bricolage text-left text-xl text-[#3A86FF] sm:text-2xl">Sweply</h1>
        <i className={`ri-menu-line text-xl sm:hidden ${!isNav?'':'hidden'} motion-preset-pop motion-duration-200`} onClick={handleNav}></i>
        <i class={`ri-close-large-line sm:hidde text-xl ${isNav?'':'hidden'} motion-preset-pop motion-duration-200`} onClick={handleNav}></i>
        </div>
        {/* Part-2 */}
        <div className={`block sm:gap-8 md:gap-14 lg:gap-20 clear-both font-space sm:flex text-md ${isNav?'':'hidden'} `}>
          <div className="my-4"><Link to={"/drop"} className="hover:text-[#3A86FF]">Drop</Link></div>
          <div className="my-4"><Link to={"/flow"} className="hover:text-[#3A86FF]">Flow</Link></div>
          <div className="my-4"><Link to={"/archive"} className="hover:text-[#3A86FF]">Archive</Link></div>
        </div>
        {/* Part-3 */}
        <div>
          <button className={`mt-2 w-full font-space bg-[#3A86FF] text-[#F5F7FA] px-4 py-1 rounded active:bg-[#3a51ff] sm:flex ${isNav?'':'hidden'}`}>SignIn</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
