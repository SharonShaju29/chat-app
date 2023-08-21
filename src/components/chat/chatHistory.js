import "./css/chatHistory.css";
import ChatCard from "./chatCard";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chatHistoryAction, chatByUserAction } from "../../store/chat/actions";
import { userDetails } from "../../utils/auth";


function ChatHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chatHistoryAction({ user: "sharon@gmail.com" }));
  }, [dispatch]);
  let state = useSelector((state) => state.chat.chatHistory);

  const openChatHandler = (contact) => {
    dispatch(chatByUserAction({ user: JSON.parse(userDetails).user, contact: contact }));
  };

  return (
    <div className="chat-history-wrapper">
      <div className="message-header">
        <h2 className="header-title">Messages</h2>
        <Input
          className="input-search"
          size="large"
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>
      {state.map((item, index) => (
        <ChatCard
          name={item.contactName}
          lastMessage={item.lastMessage.message}
          time={item.lastMessage.time}
          unseen={item.unseenMessages}
          key={index}
          onClick={() => openChatHandler(item.contact)}
        />
      ))}
    </div>
  );
}

export default ChatHistory;
