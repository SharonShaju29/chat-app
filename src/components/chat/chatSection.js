import "./css/chatSection.css";
import user from "../../assets/user.avif";
import { useSelector } from "react-redux";
import ChatContactMessage from "./chatContactMessage";

function ChatSection() {
  const state = useSelector((state) => state.chat.currentChat);
  return (
    <div>
      <div className="chat-info-header">
        <img src={user} className="image-design" />
        <h3>{state.contactName}</h3>
      </div>
      <div>
        <ChatContactMessage/>
      </div>
    </div>
  );
}

export default ChatSection;
