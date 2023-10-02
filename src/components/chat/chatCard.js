import user from "../../assets/user.avif";
import "./css/chatCard.css";
import { Badge } from "antd";
import { timeFormatter } from "../../utils/date";

function ChatCard(props) {
  return (
    <div className="chat-card-wrapper" onClick={props.onClick}>
      <div className="chat-name-img">
      <img src={user} className="image-design" alt="" />
      <div>
        <h4 className="card-name-font">{props.name}</h4>
        <span className="span-message">{props.lastMessage}</span>
      </div>
      </div>
      <div className="card-time-badge-wrapper">
        <div>{props.time}</div>
        <Badge
          count={props.unseen > 1 ? props.unseen : ""}
          className="badge-style"
          color="blue"
        />
      </div>
    </div>
  );
}

export default ChatCard;
