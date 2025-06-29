import React, { use, useState } from "react";
import supabase from "../lib/supabase-client";

let Drop = () => {
  // Handling thoughts
  let [thoughtInput, setThoughtInput] = useState("");
  let handleThought = (v) => {
    setThoughtInput(v);
  };

  // Handling tags
  let [tagInput, setTagInput] = useState([]);
  let handleTag = (v) => {
    if (tagInput.includes(v)) {
      let rTagInput = tagInput.filter((val, i, a) => val !== v);
      setTagInput(rTagInput);
    } else {
      setTagInput([...tagInput, v]);
    }
  };

  // Handling drop
  let handleDrop = async () => {
    if (thoughtInput !== "" && tagInput.length !== 0) {
      console.log(thoughtInput, tagInput);
      let { data, error } = await supabase
        .from("thoughts")
        .insert([{ text: thoughtInput, tags: tagInput, status: "active" }])
        .select();
      if (error) {
        console.log(error);
      }
    }
  };

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
      <div className="border-2 rounded-xl bg-zinc-50 border-zinc-200 px-6 py-6 text-md">
        {/* Thought tnput */}
        <div>
          <textarea
            name=""
            id="thoughtInput"
            placeholder="What’s on your mind?"
            className="bg-white text-[#1F1F1F] h-32 w-full rounded-t-xl -xl py-3 px-3 sm:px-6 font-space outline-none border-2 border-zinc-200"
            onChange={(e) => {
              handleThought(e.target.value);
            }}
          ></textarea>
        </div>
        {/* Tagging thought */}
        <div className="w-full border-2 bg-white border-zinc-200   mt-2 py-3 px-3 sm:mt-4 sm:py-6 sm:px-6 flex justify-between overflow-auto text-sm">
          {TAGS.map((v, i, a) => (
            <h1
              key={i}
              className={` text-[#1F1F1F] hover:bg-[#3A86FF] hover:text-[#F5F7FA] inline-block rounded py-1 px-4 m-2 font-space border-0 cursor-pointer  ${
                tagInput.includes(v) ? "bg-[#3A86FF] text-white" : "bg-zinc-200"
              }`}
              onClick={(e) => handleTag(v)}
            >
              {v}
            </h1>
          ))}
        </div>
        {/* Drop button */}
        <div>
          <button
            className="w-full bg-[#3A86FF] font-space text-white rounded py-2 mt-6 active:bg-[#3a51ff] "
            onClick={handleDrop}
          >
            Drop
          </button>
        </div>
      </div>
    </>
  );
};

export default Drop;
