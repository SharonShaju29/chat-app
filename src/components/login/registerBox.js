import "./css/registerBox.css";
import { Input, Button } from "antd";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { registerAction } from "../../store/login/actions";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function RegisterBox() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const dispatch = useDispatch();

  const register = bindActionCreators(registerAction, dispatch);

  const registerSuccessHandler = () => {
    Navigate("/user/login");
  };

  const registerHandler = () => {
    register(
      { email: email, name: name, password: password },
      registerSuccessHandler
    );
  };

  return (
    <div className="register-box-wrapper">
      <div className="welcome-text">Welcome !</div>
      <div>
        <div className="sign-up">Sign up to</div>
        <div className="chatter-box-title">Chatter Box</div>
      </div>
      <div className="input-style">
        <label>Email</label>
        <Input
          className="input-sizer"
          size="large"
          placeholder="Enter you email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="input-style">
        <label>User name</label>
        <Input
          className="input-sizer"
          size="large"
          placeholder="Enter you user name"
          value={name}
          onChange={handleName}
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
      <div className="input-style">
        <label>Confirm Password</label>
        <Input.Password
          className="input-sizer"
          size="large"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
      </div>
      <div>
        <Button
          className="button-style"
          size="large"
          onClick={registerHandler}
        >
          Register
        </Button>
      </div>
      <div className="no-account-text-style">
        Already have an Account? <Link to="/user/login">Login</Link>
      </div>
    </div>
  );
}

export default RegisterBox;
