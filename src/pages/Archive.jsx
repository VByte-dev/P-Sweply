import React, { useEffect, useState } from "react";
import supabase from "../lib/supabase-client";

// Components
import ArchiveCard from "../components/ArchiveCard";

let Archive = () => {
  // Fetching archived data from the DB
  let [thought, setThought] = useState([]);
  let fetchThoughts = async () => {
    console.log("Fetching...");
    let { data, error } = await supabase
      .from("thoughts")
      .select("*")
      .eq("status", "archived");

    if (error) {
      console.log(error);
    } else {
      setThought(data);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <>
      <div>
        {/* Archive card */}
        <div className="mt-12">
          {thought.map((v, i, a) => (
            <ArchiveCard data={v} key={i} />
          ))}
        </div>

        {/* Empty thought placeholder*/}
        <div className="bg-zinc-50 rounded-lg border-2 border-zinc-200 px-3 py-3 sm:px-4 sm:py-4 my-6 motion-preset-focus mt-16">
          <h1 className="text-zinc-600 text-center my-2 font-bricolage ">
            🧹 Your archive is empty.
          </h1>
          <h1 className="text-zinc-600 text-center my-2 font-space ">
            Thoughts you sweep from your flow are kept here - so you can look
            back, reflect, and see your journey over time
          </h1>
        </div>
      </div>
    </>
  );
};

export default Archive;
