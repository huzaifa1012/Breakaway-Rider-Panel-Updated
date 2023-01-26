import React, { useEffect } from "react";
import "./orderCard.css";
import { db, app } from "../../firebase";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const auth = getAuth();
console.log(auth);
export default function OrderCard() {
  let navigate = useNavigate();
  let [rider, setRider] = useState([]);
  function FetchRiderData() {
    let collectionRef = collection(db, "sendToRider");
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const riderdata = [];
      querySnapshot.forEach((doc) => {
        riderdata.push({ ...doc.data(), id: doc.id });
        let data = doc.data();
      });
      setRider(riderdata);
    });
    return () => unsubscribe();
  }
  useEffect(() => {
    FetchRiderData();
  }, []);

  function viewOrder(data) {
    navigate("/viewOrder", { state: { itemId: data } });
    console.log(data);
  }

  return (
    <>
      {rider.map((data, index) => {
        return (
          <div key={index}>
            <div className="cardWrap">
              <div className="cardMain">
                <div className="cardHead">
                  <div className="card-left">
                    <h2>{data.customerName}</h2>
                    <p>{data.customerPhone}</p>
                  </div>
                  <div className="card-right">
                    <img
                      src="https://www.pngitem.com/pimgs/m/443-4437343_oneplus-7t-glacier-blue-hd-png-download.png"
                      className="card-head-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="cardBody">
                  <div className="secHead">
                    <p className="item">
                      <b> Item: {"data.productName"} </b>
                    </p>
                    <p className="price">
                      <b> {data.customerPayment}</b>
                    </p>
                  </div>
                  <div className="pick">
                    <p>
                      <b>Pick From</b>
                    </p>
                    <p>{data.customerPickLocation}</p>
                  </div>
                  <div className="drop">
                    <p>
                      <b>Drop Here</b>
                    </p>
                    <p>{data.customerDropLocation}</p>
                  </div>
                  <div className="btn-wrap">
                    <button
                      className="view-Btn"
                      onClick={() => {
                        viewOrder(data);
                      }}
                    >
                      View Order{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            ;
          </div>
        );
      })}
    </>
  );
}
