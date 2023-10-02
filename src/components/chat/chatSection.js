import "./css/chatSection.css";
import userProfile from "../../assets/user.avif";
import { useSelector } from "react-redux";
import ChatContactMessage from "./chatContactMessage";
import ChatUserMessage from "./chatUserMessage";
import MessageBox from "./messageBox";

// const items = [
//   { item: "ssas" },
//   { item: "same" },
//   { item: "ssas" },
//   { item: "ssas" },
//   { item: "same" },
// ];

function ChatSection() {
  const state = useSelector((state) => state.chat.currentChat);
  const user = state?.user;
  const messages = state?.messages;
  return (
    <div className="chat-section-wrapper">
      <div className="chat-info-header">
        <img src={userProfile} className="image-design" />
        <h3>{state.contactName}</h3>
      </div>
      <div className="chat-message">
        {messages?.map((item, index) => {
          if (item.user === user)
            return <ChatUserMessage item={item} key={index} />;
          else return <ChatContactMessage item={item} key={index} />;
        })}
      </div>
      <div className="message-box">
        <MessageBox/>
      </div>
    </div>
  );
}

export default ChatSection;
