import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import logoS from "../Media/png Short Logo.png";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../Media/mix.css";
import "./signin.css";

const Signin = () => {
  const navigate = useNavigate();
  const [riderEmail, setriderEmail] = useState("");
  const [riderPassword, setriderPassword] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  function SigninUser() {
    const auth = getAuth();

    if (riderEmail.length > 8 && riderPassword.length > 5) {
      setIsLoad(true);
      signInWithEmailAndPassword(auth, riderEmail, riderPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
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
        text: `Invalid data`,
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
          <h1 className="heading-h1">Sigin in</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={(e) => {
                  setriderEmail(e.target.value);
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
                  setriderPassword(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={SigninUser}
                disabled={isLoad}
              >
                {isLoad ? (
                  <div className="spinner-border text-white bg-primary"></div>
                ) : (
                  "Log In"
                )}
              </Button>
              <div className="bottom">
                <p href="">
                  <Link to="/register">Register now!</Link>
                </p>

                <p className="login-form-forgot" href="">
                  <Link to="/reset-password">Forget Password</Link>
                </p>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signin;
