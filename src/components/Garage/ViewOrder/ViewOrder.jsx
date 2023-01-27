import React, { useState } from "react";
import { db } from "../../../firebase";
import ResponsiveAppBar from "../header/Header";
import { useLocation } from "react-router-dom";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./ViewOrder.css";

export default function ViewOrder() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const location = useLocation();
  let data = location.state.itemId;

  const SuccessFullDelivered = () => {
    let collectionRef = collection(db, "deliveredProducts");
    setClick(true);
    addDoc(collectionRef, {
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone,
      currency: data.customerPayment,
      pickLocation: data.customerPickLocation,
      dropLocation: data.customerDropLocation,
      deliveredOn: new Date().toLocaleString(),
    }).then((response) => {
      let deleteRef = doc(db, "sendToRider", data.id);
      deleteDoc(deleteRef).then((response) => {
        setClick(false);
        navigate("/");
      });
    });
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="view-order-wrap">
        <div className="view-order-main">
          <div className="view-top">
            <p className="view-card-heading">Customer Details</p>
            <hr style={{ marginTop: "0px" }} />
            <h5>
              <span className="property-of-view-Card"> Name : </span>
              <span className="prop-value-of-view-card">
                {data.customerName}
              </span>
            </h5>
            <h5>
              <span className="property-of-view-Card"> Phone : </span>
              <span className="prop-value-of-view-card">
                {data.customerPhone}
              </span>
            </h5>
            <h5>
              <span className="property-of-view-Card"> Email &nbsp; : </span>
              <span className="prop-value-of-view-card">
                {data.customerEmail}
              </span>
            </h5>
            <h5>
              <span className="property-of-view-Card"> CRCY &nbsp; :</span>
              <span className="prop-value-of-view-card">
                {data.customerPayment}
              </span>
            </h5>
          </div>

          <div className="view-bottom">
            <p className="view-card-heading">Address</p>
            <hr style={{ marginTop: "0px" }} />
            <h5>
              <span className="property-of-view-Card">Pick From : </span>
              <span className="prop-value-of-view-card">
                {data.customerPickLocation}
              </span>
            </h5>
            <h5>
              <span className="property-of-view-Card">Drop Here : </span>
              <span className="prop-value-of-view-card">
                {data.customerDropLocation}
              </span>
            </h5>
            <hr />
          </div>

          <div className="view-card-bottom">
            <button
              className="Delivered_BTN"
              onClick={SuccessFullDelivered}
              disabled={click}
            >
              {click ? (
                <div className="spinner-border text-white"></div>
              ) : (
                "Delivered"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
