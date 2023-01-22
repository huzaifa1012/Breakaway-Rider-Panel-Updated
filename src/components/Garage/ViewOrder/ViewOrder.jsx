import React from "react";
import ResponsiveAppBar from "../header/Header";
import { useLocation } from "react-router-dom";
export default function ViewOrder() {
  const itemID = useLocation();
  console.log(itemID.state.itemId);
  let data = itemID.state.itemId;
  return (
    < >
      <ResponsiveAppBar />
      <h1 style={{ textAlign: "center" }}>
        View Order Details
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            border: "2px solid black",
            background:'#f0f0f0',
            textAlign: "center",
            width: "fit-content",
            padding: "20px",
          }}
        >
          <h2>{data.name}</h2>
          <h2>{data.title}</h2>
          <h2>{data.phone}</h2>
          <h2>{data.pick}</h2>
          <h2>{data.drop}</h2>
        </div>
      </div>
    </>
  );
}
