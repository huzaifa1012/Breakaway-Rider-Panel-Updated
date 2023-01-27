import React, { useState } from "react";
import ResponsiveAppBar from "../header/Header";
import { useLocation } from "react-router-dom";
import "./ViewOrder.css";
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
              <button className="Delivered_BTN" onClick={SuccessFullDelivered}>
                Delivered
              </button>
            </div>
        </div>
      </div>
    </>
  );
}
