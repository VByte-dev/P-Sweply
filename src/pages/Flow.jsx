import React, { useEffect, useState } from "react";
import supabase from "../lib/supabase-client";

// Components
import ThoughtCard from "../components/ThoughtCard";

let Flow = () => {
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

  // Fetching active data from the DB
  let [thought, setThought] = useState([]);

  let fetchThoughts = async () => {
    let { data, error } = await supabase
      .from("thoughts")
      .select("*")
      .eq("status", "active");

    if (error) {
      console.log(error);
    } else {
      setThought(data);
    }
    console.log(thought);
  };
  useEffect(() => {
    fetchThoughts();
  }, []);

  // Handling clearall
  let handleClearAll = async () => {
    let { error } = await supabase
      .from("thoughts")
      .update({ status: "archived" })
      .eq("status", "active");
    setThought([]);
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {/* Part-1 */}
        <div className="flex mt-6 sm:mt-12 justify-end gap-4">
          {/* Filter */}
          <div>
            <button className="bg-[#3A86FF] active:bg-[#3a51ff] text-white rounded  px-3 text-sm py-1 mt-3 font-space border">
              Focus
            </button>
          </div>

          {/* Sweep All */}
          <div className="">
            <button
              className="bg-[#27ae60] active:bg-[#229954] text-white rounded px-3 text-sm py-1 mt-3 font-space"
              onClick={handleClearAll}
            >
              Sweep All
            </button>
          </div>
        </div>

        {/* Thoughts card */}
        <div className="mt-0 sm:mt-10">
          {thought.map((v, i, a) => {
            return (
              <ThoughtCard data={v} refreshThoughts={fetchThoughts} key={i} />
            );
          })}
        </div>
        {/* Empty thought placeholder*/}
        <div className="bg-zinc-50 rounded-lg border-2 border-zinc-200 px-3 py-3 sm:px-4 sm:py-4 my-6 motion-preset-focus mt-16">
          <h1 className="text-zinc-600 text-center my-2 font-bricolage ">
            🧹 All clear. Drop in your next thought.
          </h1>
          <h1 className="text-zinc-600 text-center my-2 font-space ">
            {" "}
            This is your live space. Drop what’s on your mind, reflect, and
            sweep them away when you’re ready.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Flow;
