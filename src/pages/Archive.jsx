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
      <div className="mt-12">
        {thought.map((v, i, a) => (
          <ArchiveCard data={v} key={i} />
        ))}
      </div>
    </>
  );
};

export default Archive;
