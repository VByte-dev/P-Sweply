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

  return (
    <>
      <div className="mt-12 sm:mt-24 ">
        {thought.map((v, i, a) => {
          return <ThoughtCard data={v} key={i} />;
        })}
      </div>
    </>
  );
};

export default Flow;
