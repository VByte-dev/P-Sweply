import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Navbar from "../components/Navbar";
import Drop from "./Drop";
import Flow from "./Flow";
import Archive from "./Archive";
import Auth from "./Auth";
import supabase from "../lib/supabase-client";

let Router = () => {
  // User auth setup
  let [isAuth, setIsAuth] = useState(false);

  let checkAuth = async () => {
    let { data, error } = await supabase.auth.getSession();
    setIsAuth(!!data.session);

    if (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    checkAuth();

    let { data: subscribtion, error } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuth(!!session);
      }
    );
    return () => subscribtion.unsubscribe();
  }, []);
  return (
    <>
      <div id="navbar" className="mt-10 sm:mt-12">
        <Navbar isAuth={isAuth} />
      </div>
      <Routes>
        <Route path="/drop" element={<Drop isAuth={isAuth} />}></Route>
        <Route path="/flow" element={<Flow isAuth={isAuth} />}></Route>
        <Route path="/archive" element={<Archive isAuth={isAuth} />}></Route>
        <Route path="/auth" element={<Auth isAuth={isAuth} />}></Route>
      </Routes>
    </>
  );
};

export default Router;
