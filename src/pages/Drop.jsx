import React from "react";

let Drop = () => {
  // Tag list
  const TAGS = [
    "Idea",
    "Goal",
    "Reflection",
    "Doubt",
    "Emotion",
    "Inspiration",
    "Task",
  ];

  return (
    <>
      <div className="border-2 rounded-xl bg-zinc-50 border-zinc-200 px-6 py-6">
        {/* Thought tnput */}
        <div>
          <textarea
            name=""
            id=""
            placeholder="What’s on your mind?"
            className="bg-white text-[#1F1F1F] h-32 w-full rounded-t-xl rounded-bl-xl py-3 px-6 font-space outline-none border-2 border-zinc-200"
          ></textarea>
        </div>
        {/* Tagging thought */}
        <div className="w-full border-2 bg-white border-zinc-200 rounded-xl mt-4 py-6 px-6 flex justify-between">
          {TAGS.map((v, i, a) => (
            <h1 className="bg-zinc-200 text-[#1F1F1F] hover:bg-[#3A86FF] hover:text-[#F5F7FA] inline-block rounded py-1 px-4 m-2 font-space border-0 cursor-pointer">
              {v}
            </h1>
          ))}
        </div>
        {/* Drop button */}
        <div>
          <button className="w-full bg-[#3A86FF] font-space text-white rounded py-2 mt-6 active:bg-[#3a51ff]">
            Drop
          </button>
        </div>
      </div>
    </>
  );
};

export default Drop;
