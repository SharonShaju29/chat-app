import "./css/loginBox.css";
import { Input, Button } from "antd";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/login/actions";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function LoginBox() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();

  const login = bindActionCreators(loginAction, dispatch);

  const loginSuccessHandler = () => {
    Navigate("/chat");
  };

  const loginHandler = () => {
    login({ email: email, password: password }, loginSuccessHandler);
  };

  return (
    <div className="login-box-wrapper">
      <div className="welcome-text">Welcome !</div>
      <div>
        <div className="sign-in">Sign in to</div>
        <div className="chatter-box-title">Chatter Box</div>
      </div>
      <div className="input-style">
        <label>User name</label>
        <Input
          className="input-sizer"
          size="large"
          placeholder="Enter you email"
          value={email}
          onChange={handleEmail}
        />
      </div>

      <div className="input-style">
        <label>Password</label>
        <Input.Password
          className="input-sizer"
          size="large"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div>
        <Button className="button-style" size="large" onClick={loginHandler}>
          Login
        </Button>
      </div>
      <div className="no-account-text-style">
        Don't have an Account? <Link to="/user/register">Register</Link>
      </div>
    </div>
  );
}

export default LoginBox;
