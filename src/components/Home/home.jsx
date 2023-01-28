import { app } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OrderCard from "../oder card/orderCard";
import ResponsiveAppBar from "../Garage/header/Header";
import "./home.css";
import { useState } from "react";
export default function Home() {
  const [id,setId] = useState('')
  let navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setId(uid)
      } else {
        navigate("/signin");
      }
    });
  }, []);

  return (
    <>
      <div className="home-main">
        <ResponsiveAppBar />
        <OrderCard id={id} />
      </div>
    </>
  );
}
