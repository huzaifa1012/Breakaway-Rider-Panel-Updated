import React, { useState } from "react";
import ResponsiveAppBar from "../header/Header";
import { useLocation } from "react-router-dom";
export default function ViewOrder() {
  const location = useLocation();
  let data = location.state.itemId;
  console.log(data);
  const SuccessFullDelivered = () => {
    console.log(
      "Bro Yaha successfully delivered ki functionallity Lgadijye ",
      location.state.data
    );
  };

  return (
    <>
      <ResponsiveAppBar />
      <h1 style={{ textAlign: "center" }}>View Order Details</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ fontSize: "20px", color: "white" }}>
          <h3>Name: {data.customerName}</h3>
          <h3>Phone : {data.customerPhone}</h3>
          <h3>Email: {data.customerEmail}</h3>
          <h3>Pick From: {data.customerPickLocation}</h3>
          <h3>Drop Here: {data.customerDropLocation}</h3>
          <h3>Payment Currency: {data.customerPayment}</h3>
          <button onClick={SuccessFullDelivered}>Delivered</button>
        </div>
      </div>
    </>
  );
}
