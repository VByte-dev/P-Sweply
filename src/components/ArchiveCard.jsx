import React from "react";

let ArchiveCard = (props) => {
  // Destructuring data
  let { text, created_at, tags } = props.data;

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
      </div>
    </>
  );
};

export default ArchiveCard;
