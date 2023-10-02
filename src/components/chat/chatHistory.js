import "./css/chatHistory.css";
import ChatCard from "./chatCard";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { chatHistoryAction, chatByUserAction } from "../../store/chat/actions";
import { authToken } from "../../utils/auth";

function ChatHistory() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [chats,setChats] = useState([])
  
  useEffect(() => {
    dispatch(chatHistoryAction({ user: "sharon@gmail.com", success:chatListSuccessHandler }));
  }, []);

  let state = useSelector((state) =>state.chat.chatHistory);
  
  function chatListSuccessHandler() {
     console.log(state)
  }

 
  
  const openChatHandler = (contact) => {
    dispatch(
      chatByUserAction({ user: JSON.parse(authToken).user, contact: contact })
    );
    Navigate("/chat/messages/chat");
  };
 

  const handleSearchQuery = (event) => {
    let searchQuery = event.target.value
    let val = state.filter(item=>item.contactName.includes(searchQuery))
    setChats(val)
  }

  return (
    <div className="chat-history-wrapper">
      <div className="message-header">
        <h2 className="header-title">Messages</h2>
        <Input
          className="input-search"
          size="large"
          placeholder="Search"
          prefix={<SearchOutlined />}
          onChange={handleSearchQuery}
        />
      </div>
      {chats.map((item, index) => (
        <ChatCard
          name={item.contactName}
          lastMessage={item.lastMessage?.message}
          time={item.lastMessage?.time}
          unseen={item.unseenMessages}
          key={index}
          onClick={() => openChatHandler(item.contact)}
        />
      ))}
    </div>
  );
}

export default ChatHistory;
