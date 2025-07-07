import React from "react";

let Home = () => {
  return (
    <>
      <div>
        {/* Hero section */}
        <div className="md:mx-20 lg-mx-30 xl:mx-40">
          <h1 className="font-bricolage text-2xl text-center mt-30 lg:text-4xl">
            <span className="text-[#3a51ff]">Too many thoughts? </span>
            <span>
              Drop them into Sweply - clear your mind now, reflect later.
            </span>
          </h1>
          <div className="text-center">
            <h1 className="font-bricolage text-zinc-600 mt-4 mb-4 font-extralight px-4 inline-block bg-zinc-100 border-1 border-zinc-200 rounded-full text-sm text-center lg:text-base">
              🧹 Sweep your mind. Simply.
            </h1>
          </div>
          <p className="text-center font-space mt-4 mx-4 lg:text-lg">
            A minimalist tool to unload your mind, tag your thoughts, and
            revisit them anytime - built for clarity & reflection.
          </p>
          <div>
            <button className="w-full bg-[#3A86FF] font-space text-white rounded py-1 mt-6 active:bg-[#3a51ff] active:motion-preset-pop motion-duration-100">
              Start Swepping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
