import React, { useState } from "react";
import ResponsiveAppBar from "../header/Header";
import { useLocation } from "react-router-dom";
export default function ViewOrder() {
  const [name, setName] = useState("");
  const [pick, setPick] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [drop, setDrop] = useState("");
  const [payment, setPayment] = useState("");
  const [id, setId] = useState("");
  const itemID = useLocation();
  let data = itemID.state.itemId;
  console.log(data.customerEmail)
  // setName(data.customerName);
  // setPick(data.customerPickLocation);
  // setDrop(data.customerDropLocation);
  // setEmail(data.customerEmail);
  // setPhone(data.customerPhone);
  // setPayment(data.customerPayment);
  return (
    <>
      <ResponsiveAppBar />
      <h1 style={{ textAlign: "center" }}>View Order Details</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            border: "2px solid black",
            background: "#f0f0f0",
            textAlign: "center",
            width: "fit-content",
            padding: "20px",
          }}
        >
          <h2>{name}</h2>
          <h2>{pick}</h2>
          <h2>{drop}</h2>
          <h2>{email}</h2>
          <h2>{phone}</h2>
          <h2>{payment}</h2>
          <button onClick={() => alert("ALLAH")}>Send</button>
        </div>
      </div>
    </>
  );
}
