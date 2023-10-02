import "./css/chatContactMessage.css";
import { timeFormatter } from "../../utils/date";

function chatContactMessage(props) {
  return (
    <div className="chat-contact-message-wrapper">
      <span>{props.item.message}</span>
      <span className="chat-time">{timeFormatter(props.item.time)}</span>
    </div>
  );
}

export default chatContactMessage;
