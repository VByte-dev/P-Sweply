import React, { useEffect, useState } from "react";
import supabase from "../lib/supabase-client";
import { useNavigate } from "react-router-dom";

// Components
import ThoughtCard from "../components/ThoughtCard";
// import FocusCard from "../components/FocusCard"; - Underdevelopment

let Flow = (props) => {
  let { isAuth, userId, loading } = props;

  let navigateTo = useNavigate();
  useEffect(() => {
    if (!loading && isAuth === false) {
      navigateTo("/auth");
    }
  }, [loading, isAuth, navigateTo]);

  // Fetching active data from the DB
  let [thought, setThought] = useState([]);
  let [fetching, setFetching] = useState(true);

  let fetchThoughts = async () => {
    let { data, error } = await supabase
      .from("thoughts")
      .select("*")
      .eq("status", "active")
      .eq("user_id", userId);

    if (error) {
      console.log(error.message);
    } else {
      setThought(data);
      setFetching(false);
    }
  };

  useEffect(() => {
    if (!loading && isAuth) {
      fetchThoughts();
    }
  }, [loading, isAuth]);

  let handleClearAll = async () => {
    let { error } = await supabase
      .from("thoughts")
      .update({ status: "archived" })
      .eq("status", "active")
      .eq("user_id", userId);

    setThought([]);

    if (error) {
      console.log(error.message);
    }
  };

  if (loading || fetching) {
    return (
      <h1 className="font-bricolage border-1 border-zinc-200 bg-zinc-100 rounded text-center py-6 text-zinc-500 mt-16">
        🧠 Loading your latest thoughts…
      </h1>
    );
  }

  return (
    <>
      <div className="selection:bg-amber-200 selection:text-black">
        {/* Sweep All btn */}
        <div className="flex mt-6 sm:mt-12 justify-end gap-4">
          <button
            className="bg-[#27ae60] active:bg-[#229954] text-white rounded px-3 text-sm py-1 mt-3 font-space"
            onClick={handleClearAll}
          >
            Sweep All
          </button>
        </div>

        {/* Thoughts display */}
        {thought.length === 0 ? (
          <div className="bg-zinc-50 rounded-lg border-2 border-zinc-200 px-3 py-3 sm:px-4 sm:py-4 my-6 motion-preset-focus mt-16">
            <h1 className="text-zinc-600 text-center my-2 font-bricolage ">
              🧹 All clear. Drop in your next thought.
            </h1>
            <h1 className="text-zinc-600 text-center my-2 font-space ">
              This is your live space. Drop what’s on your mind, reflect, and
              sweep them away when you’re ready.
            </h1>
          </div>
        ) : (
          <div className="mt-0 sm:mt-10">
            {thought.map((v, i) => (
              <ThoughtCard
                data={v}
                userId={userId}
                refreshThoughts={fetchThoughts}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Flow;
