import React, { useEffect, useState } from "react";
import supabase from "../lib/supabase-client";

// Components
import ThoughtCard from "../components/ThoughtCard";

let Flow = () => {
  // Fetching data from the DB
  let [thought, setThought] = useState([]);

  let fetchThoughts = async () => {
    let { data, error } = await supabase.from("thoughts").select("*");
    setThought(data);
  };
  useEffect(() => {
    fetchThoughts();
  }, []);

  // Handling clearall
  let handleClearAll = async () => {
    let { error } = await supabase
      .from("thoughts")
      .delete()
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
        <div>
          <div className="flex justify-end mt-6 sm:mt-12">
            <button
              className="bg-[#3A86FF] active:bg-[#3a51ff] text-white rounded inline-block px-3 text-sm py-1 mt-3 font-space"
              onClick={handleClearAll}
            >
              Sweep All
            </button>
          </div>
        </div>

        {/* Thoughts Card */}
        <div className="mt-0 sm:mt-10">
          {thought.map((v, i, a) => {
            return <ThoughtCard data={v} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Flow;
