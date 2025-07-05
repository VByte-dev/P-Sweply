import React, { useEffect, useState } from "react";
import supabase from "../lib/supabase-client";
import { useNavigate } from "react-router-dom";

// Components
import ArchiveCard from "../components/ArchiveCard";

let Archive = (props) => {
  // Is auth
  let { isAuth } = props;
  console.log("Drop: ", isAuth);

  let navigateTo = useNavigate();
  useEffect(() => {
    if (isAuth === false) {
      navigateTo("/auth");
    }
  }, []);

  // Fetching archived data from the DB
  let [thought, setThought] = useState([]);
  let [loading, setLoading] = useState(true);

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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <h1 className="font-bricolage border-1 border-zinc-200 bg-zinc-100 rounded text-center py-6 text-zinc-500 mt-16">
            🧹 Loading your saved thoughts…
          </h1>
        ) : (
          <div>
            {/* Decider - Empty placeholder or Archive card*/}
            {thought.length === 0 ? (
              // Empty placeholder
              <div className="bg-zinc-50 rounded-lg border-2 border-zinc-200 px-3 py-3 sm:px-4 sm:py-4 my-6 motion-preset-focus mt-16">
                <h1 className="text-zinc-600 text-center my-2 font-bricolage ">
                  🧹 Your archive is empty.
                </h1>
                <h1 className="text-zinc-600 text-center my-2 font-space ">
                  Thoughts you sweep from your flow are kept here - so you can
                  look back, reflect, and see your journey over time.
                </h1>
              </div>
            ) : (
              // Archive Card
              <div className="mt-16">
                {thought.map((v, i, a) => (
                  <ArchiveCard data={v} key={i} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Archive;
