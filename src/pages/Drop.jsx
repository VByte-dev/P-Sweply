import React, { useEffect, useState } from "react";
import supabase from "../lib/supabase-client";
import { useNavigate } from "react-router-dom";

let Drop = (props) => {
  // Destructuring the props
  let { isAuth, userId } = props;
  // console.log("Drop: ", isAuth);

  let navigateTo = useNavigate();
  useEffect(() => {
    if (isAuth === false) {
      navigateTo("/auth");
    }
  }, []);

  // Tag list
  const TAGS = [
    "Idea",
    "Goal",
    "Reflection",
    "Doubt",
    "Emotion",
    "Inspiration",
    "Task",
    "Random",
  ];

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
      let { data, error } = await supabase
        .from("thoughts")
        .insert([
          {
            text: thoughtInput,
            tags: tagInput,
            status: "active",
            user_id: userId,
          },
        ])
        .select();

      if (error) {
        console.log(error.message);
      } else {
        setThoughtInput("");
        setTagInput([]);
      }
    }
  };

  return (
    <>
      <div className="rounded-xl bg-zinc-50 border-2 border-zinc-200  px-6 py-6 text-md mt-24 sm:mt-32 selection:bg-amber-200 selection:text-black">
        {/* Thought input */}
        <div>
          <textarea
            name=""
            id="thoughtInput"
            placeholder="What’s on your mind?"
            value={thoughtInput}
            className="bg-white text-[#1F1F1F] h-32 w-full rounded-lg  py-3 px-3 sm:px-6 font-space outline-none border-2 border-zinc-200 resize-none"
            onChange={(e) => {
              handleThought(e.target.value);
            }}
          ></textarea>
        </div>
        {/* Tagging thought */}
        <div className="w-full mt-2 flex-wrap text-sm">
          {TAGS.map((v, i, a) => (
            <h1
              key={i}
              className={`text-[#1F1F1F] inline-block rounded py-1 px-4 mr-2 sm:mr-4 my-2 font-space cursor-pointer  ${
                tagInput.includes(v)
                  ? "bg-black text-white border-1 border-black"
                  : "bg-zinc-100 border-1 border-zinc-200"
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
            className="w-full bg-[#3A86FF] font-space text-white rounded py-1 mt-6 active:bg-[#3a51ff] "
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
