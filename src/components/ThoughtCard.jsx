import React, { useState } from "react";
import supabase from "../lib/supabase-client";

let ThoughtCard = (props) => {
  // Destructuring the props
  let { text, tags, created_at } = props.data;
  let { userId } = props;

  // Handle Clear
  let handleClear = async () => {
    let { error } = await supabase
      .from("thoughts")
      .update({ status: "archived" })
      .eq("text", text)
      .eq("user_id", userId)
      .eq("created_at", created_at);

    if (error) {
      console.log(error.message);
    } else {
      props.refreshThoughts();
    }
  };

  return (
    <>
      <div className="bg-zinc-50 rounded-lg border-2 border-zinc-200 px-3 py-3 sm:px-4 sm:py-4 my-6 motion-preset-focus">
        {/* Created at */}
        <div className="flex justify-end">
          <h1 className="font-space text-sm text-zinc-500 mb-1">
            {created_at.slice(0, 10)}
          </h1>
        </div>
        {/* Thoughts */}
        <h1 className="font-space text-center mt-2">{text}</h1>
        {/* Tags */}
        <div className="text-md font-space text-sm">
          {tags.map((v, i, a) => (
            <h2
              key={i}
              className="bg-zinc-100 py-1 px-3 rounded border-1 border-zinc-200 mt-6 mr-2 inline-block"
            >
              {v}
            </h2>
          ))}
        </div>
        {/* Clear */}
        <div>
          <button
            className="bg-[#27ae60] active:bg-[#229954] text-white rounded w-full py-1 mt-3 font-space"
            onClick={handleClear}
          >
            Sweep
          </button>
        </div>
      </div>
    </>
  );
};

export default ThoughtCard;
