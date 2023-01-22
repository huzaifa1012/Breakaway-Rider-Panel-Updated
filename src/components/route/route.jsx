import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/home";
import Signin from "../sign in/signin";
import Register from "../register/register";
import ViewOrder from "../Garage/ViewOrder/ViewOrder.jsx"
export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Opps</h1>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/viewOrder" element={<ViewOrder />} />
      </Routes>
    </>
  );
}
