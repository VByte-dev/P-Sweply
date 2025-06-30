import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Drop from "./Drop";
import Flow from "./Flow";

let Router = () => {
  return (
    <>
      <Routes>
        <Route path="/drop" element={<Drop />}></Route>
        <Route path="/flow" element={<Flow />}></Route>
      </Routes>
    </>
  );
};

export default Router;
