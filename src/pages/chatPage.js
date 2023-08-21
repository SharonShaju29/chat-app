import "./css/chatPage.css";
import { MoreOutlined } from "@ant-design/icons";
import profile from "../assets/profile.jpg";
import { Routes, Route } from "react-router-dom";
import ChatHistory from "../components/chat/chatHistory";
import ChatSection from "../components/chat/chatSection";

function ChatPage() {
  return (
    <div>
      <div className="header-bar-wrapper">
        <img src={profile} className="image-profile" alt="" />
        <MoreOutlined className="icon-more" />
      </div>
      <div>
        <Routes>
          <Route path="/messages" element={<ChatHistory />} />
        </Routes>
      </div>
      <div>
        <ChatSection />
      </div>
    </div>
  );
}

export default ChatPage;
