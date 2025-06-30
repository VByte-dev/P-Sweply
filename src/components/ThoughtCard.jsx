import React from "react";

let ThoughtCard = (props) => {
  // Destructuring the Data
  let { text, tags, created_at } = props.data;

  return (
    <>
      <div className="bg-zinc-50 rounded-lg border-2 border-zinc-200 px-3 py-3 my-6">
        {/* Created at */}
        <div className="flex justify-end">
          <h1 className="font-space text-sm text-zinc-500 mb-1">{created_at.slice(0, 10)}</h1>
        </div>
        {/* Thoughts */}
        <h1 className="font-space">{text}</h1>
        {/* Tags */}
        <div className="text-md font-space text-sm">
          {tags.map((v, i, a) => (
            <h2 className="bg-zinc-100 py-1 px-3 rounded border-1 border-zinc-200 my-2 mr-2 inline-block">{v}</h2>
          ))}
        </div>
        {/* Clear */}
        <div>
          <button className="bg-red-500 text-white rounded w-full py-1 mt-3 font-space">
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default ThoughtCard;
