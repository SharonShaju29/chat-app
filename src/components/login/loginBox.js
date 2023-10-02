import "./css/loginBox.css";
import { Input, Button } from "antd";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/login/actions";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {INVALID_LOGIN,OK,INVALID_EMAIL} from '../../constants/login'


function LoginBox() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail,setInvalidEmail] = useState(false);
  const [invalidLogin,setInvalidLogin] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();
  
  const login = bindActionCreators(loginAction, dispatch);


  const loginSuccessHandler = (response) => {
    console.log(response)
    if(response===INVALID_LOGIN) {
      setInvalidLogin(true)
    } else if(response === INVALID_EMAIL) {
      setInvalidEmail(true)
    } else if(response===OK){
    Navigate("/chat/messages/chat")
    } 
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
          className={(invalidLogin || invalidEmail) ? "input-err" : "input-sizer"}
          size="large"
          placeholder="Enter you email"
          value={email}
          onChange={handleEmail}
        />
        {(invalidLogin || invalidEmail) && <span className ="span-err">you've entered an invalid email.Try again!</span>}
      </div>

      <div className="input-style">
        <label>Password</label>
        <Input.Password
          className={invalidLogin ? "input-err" : "input-sizer"}
          size="large"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />
        {invalidLogin && <span className="span-err">you've entered a invalid password.Try again!</span> }
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
