import React, { useState } from "react";

let FocusCard = (props) => {
  // Destructuring props
  let { fTags } = props;

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
  // Handling tags
  let [tagInput, setTagInput] = useState([]);
  let handleTag = (v) => {
    if (tagInput.includes(v)) {
      let rTagInput = tagInput.filter((val, i, a) => val !== v);
      setTagInput(rTagInput);
      fTags(rTagInput);
    } else {
      setTagInput([...tagInput, v]);
      fTags([...tagInput, v]);
    }
  };
  return (
    <>
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
    </>
  );
};

export default FocusCard;
