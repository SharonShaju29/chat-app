import "./css/loginPage.css";
import chatDiscussion from "../assets/chatDiscussion.png";
import LoginBox from "../components/login/loginBox";
import { Routes, Route } from "react-router-dom";
import RegisterBox from "../components/login/registerBox";

function LoginPage() {
  return (
    <div className="login-page-wrapper">
      <Routes>
        <Route path="/login" element={<LoginBox />} />
        <Route path="/register" element={<RegisterBox />} />
      </Routes>
      <div className="image-wrapper">
        <img src={chatDiscussion} className="image-element" alt="chat" />
      </div>
    </div>
  );
}

export default LoginPage;
