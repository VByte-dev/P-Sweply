import React from "react";
import supabase from "./lib/supabase-client";

// Pages
import Drop from "./pages/Drop";

// Components
import Navbar from "./components/Navbar";

let App = () => {
  console.log(supabase);
  return (
    <>
      <div
        id="navbar"
        className="mt-10 mx-8 sm:mt-12 sm:mx-20 md:mx-30 lg:mx-40 xl:mx-80"
      >
        <Navbar />
      </div>
      <main className="mt-24 mx-8 sm:mt-32 sm:mx-20 md:mx-30 lg:mx-40 xl:mx-80">
        <Drop />
      </main>
    </>
  );
};

export default App;
