import React from "react";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logoS from "../Media/png Short Logo.png";
import Swal from "sweetalert2";
import "./register.css";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [riderName, setRiderName] = useState("");
  const [riderEmail, setRiderEmail] = useState("");
  const [riderPhone, setRiderPhone] = useState("");
  const [riderPassword, setRiderPassword] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const auth = getAuth();
  async function register() {
    if (
      riderName.length > 2 &&
      riderEmail.length > 8 &&
      riderPhone.length > 10 &&
      riderPassword !== ""
    ) {
      createUserWithEmailAndPassword(auth, riderEmail, riderPassword)
        .then(async (userCredential) => {
          const user = userCredential.user;
          setIsLoad(true);
          const docRef = await addDoc(collection(db, "allRiders"), {
            name: riderName,
            phone: riderPhone,
            email: riderEmail,
            id: auth.currentUser.uid,
          });
          navigate("/");
          setIsLoad(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${errorMessage}`,
          });
        });
      setIsLoad(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `All data is required for registration`,
      });
      setIsLoad(false);
    }
  }

  return (
    <>
      <div className="signin-wrap">
        <div className="signin">
          <div className="signin-head">
            <img
              src={logoS}
              alt="Breakaway Official Logo"
              className="logoS"
              title="Breakaway official Logo "
            />
          </div>
          <h1 className="heading-h1">Register Now</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Name"
                onChange={(e) => {
                  setRiderName(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              name="Email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={(e) => {
                  setRiderEmail(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              name="userphone"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<WhatsAppOutlined className="site-form-item-icon" />}
                placeholder="Phone"
                onChange={(e) => {
                  setRiderPhone(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setRiderPassword(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={register}
                disabled={isLoad}
              >
                {isLoad ? (
                  <div className="spinner-border text-white bg-primary"></div>
                ) : (
                  "Register"
                )}
              </Button>
              <div className="bottom">
                <p>
                  <Link to="/signin">Already have an account</Link>
                </p>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
