import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import supabase from "../lib/supabase-client";

// Pages
import Home from "./Home";
import Navbar from "../components/Navbar";
import Drop from "./Drop";
import Flow from "./Flow";
import Archive from "./Archive";
import Auth from "./Auth";
import ResetPass from "./ResetPassword";

let Router = () => {
  let [isAuth, setIsAuth] = useState(false);
  let [loading, setLoading] = useState(true);
  let [userId, setUserId] = useState("");
  let [emailId, setEmailId] = useState("");

  let checkAuth = async () => {
    let { data, error } = await supabase.auth.getSession();
    setIsAuth(!!data.session);
    if (data.session) {
      setUserId(data.session.user.id);
      setEmailId(data.session.user.email);
    }
    setLoading(false);
    if (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    checkAuth();
    let { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuth(!!session);
        if (session) {
          setUserId(session.user.id);
          setEmailId(session.user.email);
        } else {
          setUserId("");
          setEmailId("");
        }
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <div id="navbar" className="mt-10 sm:mt-12">
        <Navbar isAuth={isAuth} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/drop"
          element={
            <Drop
              isAuth={isAuth}
              loading={loading}
              userId={userId}
              emailId={emailId}
            />
          }
        />
        <Route
          path="/flow"
          element={<Flow isAuth={isAuth} loading={loading} userId={userId} />}
        />
        <Route
          path="/archive"
          element={
            <Archive isAuth={isAuth} loading={loading} userId={userId} />
          }
        />
        <Route path="/auth" element={<Auth isAuth={isAuth} />} />
        <Route path="/resetpassword" element={<ResetPass />} />
      </Routes>
    </>
  );
};

export default Router;
