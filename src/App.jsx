import React from "react";
import supabase from "./lib/supabase-client";

// Components
import Navbar from "./components/Navbar";
import Router from "./pages/Router";

let App = () => {
  return (
    <>

      <main className="mx-8 sm:mx-20 md:mx-30 lg:mx-40 xl:mx-80">
        <Router></Router>
      </main>
    </>
  );
};

export default App;
