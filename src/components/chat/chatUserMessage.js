import "./css/chatUserMessage.css";
import { timeFormatter } from "../../utils/date";

function ChatUserMessage(props) {
  return (
    <div className="chat-user-message-wrapper">
      <span>{props.item.message}</span>
      <span className="chat-time-user">{props.item.time}</span>
    </div>
  );
}

export default ChatUserMessage;
